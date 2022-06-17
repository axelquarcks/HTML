


















function borrar(){
    console.log("botón borrar");
    
    //content.innerHTML ="";
    const texto = document.querySelector("#texto");
    texto.remove();
}

function cambiar_color(){
    console.log("Cambiar color");
    const texto = document.querySelector("texto");
    console.log(texto);
    if(texto != null && texto != undefined){
        texto.setAttribute("style","color:blue");
    }
}