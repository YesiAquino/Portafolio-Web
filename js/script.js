let menuVisible = false
//Funcion que oculta o muenta el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive"
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// funcion de animaciones de las habilidades
    function efectoHabilidades(){
     var skills = document.getElementById("skills");
     var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
     if(distancia_skills >= 300){
         let habilidades = document.getElementsByClassName("progreso");
         habilidades[0].classList.add("html");
         habilidades[1].classList.add("css");
         habilidades[2].classList.add("javascript");
         habilidades[3].classList.add("react");
         habilidades[4].classList.add("php");
         habilidades[5].classList.add("comunicacion");
         habilidades[6].classList.add("trabajo");
         habilidades[7].classList.add("creatividad");
         habilidades[8].classList.add("responsabilidad");
         habilidades[9].classList.add("aprendizaje");
     }
 }

//detecto el scrolling para aplicar la animacion de la barra de habilidades
 window.onscroll = function(){
     efectoHabilidades();
 }

//Funcion de galería
const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}

