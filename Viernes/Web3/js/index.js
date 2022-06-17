(function (){
    const page1 = document.querySelector("#page1");

    page1.addEventListener("click",function(){
        const content = document.querySelector("#Content");
        loader(content);
    });
)}();

const leader = (element) =>{
    var xmlhttp.onreadystatechange = function();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readystatechange == 4 && xmlhttp.status ==200){
            element.innerHTML = xmlhttp
        }
    }
}