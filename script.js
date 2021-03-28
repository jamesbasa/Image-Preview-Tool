function imgSearch(event){
    // image searched by link
    const link = document.getElementById('imgLink').value;
    previewHelper(link, true);
}

function dropHandler(event){
    // image dragged and dropped from computer
    event.preventDefault();
    
    if (event.dataTransfer.items){
        const fileType = event.dataTransfer.items[0].type;
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        if (validImageTypes.includes(fileType)){
            // preview one image
            var file = event.dataTransfer.items[0].getAsFile();
            let fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onloadend = () => {
                previewHelper(fileReader.result, false);
            }
        }
        else{
            // invalid file type
            alert('Please drop a valid image (gif/jpeg/png)');
            return;
        }
    }
}

function previewHelper(file, isFromLink){
    // helper function to create img from the file
    if (file === "") {
        alert("Please enter an image link");
        return;
    }
    const img = document.createElement('img');
    img.src = file;
    if (isFromLink){
        img.alt = 'image from inputted link';
    }
    else {
        img.alt = 'image dragged from computer';
    }
    const previewer = document.getElementById('previewer');
    if (previewer.children[0] != null){
        // remove the text inside the preview box
        previewer.removeChild(previewer.children[0]);
    }
    previewer.appendChild(img);
}

function dragOverHandler(event){
    event.preventDefault();
}