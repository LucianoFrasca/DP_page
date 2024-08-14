

// VIDEO 1

cover__video = document.getElementById("ctn-cover-video");
video = document.getElementById("mivideo");

//Funciones

function mostrar_video(){
    cover__video.style.display = "flex";
    video.src="./videos/video1.mp4";
}

function cerrar_video(){
    cover__video.style.display = "none";
    video.src="";
}

document.getElementById("btn-abrir").addEventListener("click",mostrar_video);
document.getElementById("btn-cerrar").addEventListener("click",cerrar_video);


// VIDEO 2

cover__video2 = document.getElementById("ctn-cover-video2");
video2 = document.getElementById("mivideo2");

//Funciones

function mostrar_video2(){
    cover__video2.style.display = "flex";
    video2.src="./videos/video2.mp4";
}

function cerrar_video2(){
    cover__video2.style.display = "none";
    video2.src="";
}

document.getElementById("btn-abrir2").addEventListener("click",mostrar_video2);
document.getElementById("btn-cerrar2").addEventListener("click",cerrar_video2);

// VIDEO 3

cover__video3 = document.getElementById("ctn-cover-video3");
video3 = document.getElementById("mivideo3");

//Funciones

function mostrar_video3(){
    cover__video3.style.display = "flex";
    video3.src="./videos/video3.mp4";
}

function cerrar_video3(){
    cover__video3.style.display = "none";
    video3.src="";
}

document.getElementById("btn-abrir3").addEventListener("click",mostrar_video3);
document.getElementById("btn-cerrar3").addEventListener("click",cerrar_video3);


// VIDEO 4

cover__video4 = document.getElementById("ctn-cover-video4");
video4 = document.getElementById("mivideo4");

//Funciones

function mostrar_video4(){
    cover__video4.style.display = "flex";
    video4.src="./videos/video4.mp4";
}

function cerrar_video4(){
    cover__video4.style.display = "none";
    video4.src="";
}

document.getElementById("btn-abrir4").addEventListener("click",mostrar_video4);
document.getElementById("btn-cerrar4").addEventListener("click",cerrar_video4);


// carrousel home
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
const openModal = document.querySelector('.btn-modal');
const modal = document.querySelector('.s-modal');
const closeModal = document.querySelector('.modal-close')

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

openModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.add('modal_show');
});

closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modal_show');
});

