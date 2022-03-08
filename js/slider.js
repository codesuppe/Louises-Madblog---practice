const slider = document.getElementById("slider");
const imgText = document.getElementById("imgText");

let i = 0;
let imagesText = [];
let images = [];
let time = 5000;

images[0] = "img/01.jpg";
images[1] = "img/02.jpg";
images[2] = "img/03.jpg";
images[3] = "img/04.jpg";

imagesText[0]="flæskesteg med brun sooovs";
imagesText[1]="pasta carbonara og bacon";
imagesText[2]="løgsuppe og lidt fransk";
imagesText[3]="store sprøde boller og tomat.";


function changeImg(){

    if(i < images.length - 1){
        i++;
    }

    else {
        i = 0;
    }

    slider.src= images[i];
    
    setTimeout("changeImg()", time);
}

window.onload = changeImg();