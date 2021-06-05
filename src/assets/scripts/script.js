const articles = document.querySelector(".articles__items");
const advertisement = document.querySelector(".articles__advertisement");


window.onload = function(){
    if(Number(screen.width) <= 768){
        articles.classList.add("_mobile");
        advertisement.classList.add("_mobile");
    }else{
        articles.classList.remove("_mobile");
        advertisement.classList.remove("_mobile");
    }
}

window.addEventListener("resize", (e)=>{
    if(Number(screen.width) <= 768){
        articles.classList.add("_mobile");
        advertisement.classList.add("_mobile");
    }else{
        articles.classList.remove("_mobile");
        advertisement.classList.remove("_mobile");
    }
})

document.addEventListener("DDOMContentLoaded", (e)=>{
    if(Number(screen.width) <= 768){
        articles.classList.add("_mobile");
        advertisement.classList.add("_mobile");
    }else{
        articles.classList.remove("_mobile");
        advertisement.classList.remove("_mobile");
    }
})