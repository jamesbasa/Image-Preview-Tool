function imgSearch(event){
    // image searched by link
    console.log('clicked');
    const link = document.getElementById('imgLink').value;
    previewHelper(link, true);
}

function dropHandler(event){
    // image dragged and dropped from computer
    console.log('dropped');
    event.preventDefault();
    
    if (event.dataTransfer.items){
        // only preview one image
        if (event.dataTransfer.items[0].kind === 'file'){
            var file = event.dataTransfer.items[0].getAsFile();
        }
        else{
            var file = event.dataTransfer.files[0];
        }
        let fileReader = new FileReader();
        try{
        fileReader.readAsDataURL(file);
        }
        catch (error){
            console.log(error);
        }
        fileReader.onloadend = () => {
            previewHelper(fileReader.result, false);
        }
    }
}

function previewHelper(file, isFromLink){
    // helper function to create img from the file
    const img = document.createElement('img');
    img.src = file;
    if (isFromLink){
        img.alt = 'image from inputted link';
    }
    else {
        img.alt = 'image dragged from computer';
    }
    const previewer = document.getElementById('previewer');
    previewer.removeChild(previewer.children[0]);
    previewer.appendChild(img);
}

function dragOverHandler(event){
    event.preventDefault();
}