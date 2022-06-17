{function () {
    console.log("iniciando");
    const boton1 = document.querySelector("boton1");
    boton1.addEventListener("click",function(){
        console.log("boton mostrar");
        const msg = document.querySelector("#msg").value;
        console.log(msg);
        const content = document.querySelector("#contenet");
        content.innerHTML = "<h1 id='texto>"

    }
}