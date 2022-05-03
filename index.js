function loadNewImages() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var imgJson = JSON.parse(this.responseText);          
            imgGenerator(imgJson);    
        }
    };

    xmlhttp.open("GET", "images.json", true);
    xmlhttp.send();
}

function imgGenerator(imgJson){
    let content = document.getElementById("container");
    for(let i = 0; i <= imgJson.length; i++){
        let randomIndex = Math.floor(Math.random() * 15);
        let newRandomImg = new Image(640,480);
        let imgDiv = document.createElement("div");
        newRandomImg.src = imgJson[randomIndex].url;
        imgDiv.appendChild(newRandomImg);    
        content.appendChild(imgDiv);
    }    
}

function isScroll(){    
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        loadNewImages();
    }
}


