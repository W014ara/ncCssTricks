const articles = document.querySelector(".articles__items");
const advertisement = document.querySelector(".articles__advertisement");

console.log(articles, advertisement);
window.addEventListener("resize", (e)=>{
    if(screen.width <= 768){
        articles.classList.add("mobile");
        advertisement.classList.add("mobile");
    }else{
        articles.classList.remove("mobile");
        advertisement.classList.remove("mobile");
    }
})

document.addEventListener("DDOMContentLoaded", (e)=>{
    if(screen.width <= 768){
        articles.classList.add("mobile");
        advertisement.classList.add("mobile");
    }else{
        articles.classList.remove("mobile");
        advertisement.classList.remove("mobile");
    }
})