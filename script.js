const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");


menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});

const isSegundaPagina = document.body.classList.contains('pagina um');


let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
nextImage()    
}, 5000)

function nextImage(){
    count++
    if(count > 3){
        count = 1
    }    
    document.getElementById("radio" + count).checked = true;
}    


    document.getElementById('linkParaOFinal').addEventListener('click', function() {
       
        window.scrollTo(0, document.body.scrollHeight);
      });