const articles = document.querySelector(".articles__items");
const advertisement = document.querySelector(".articles__advertisement");
const advertisementItem = document.querySelector(".articles__advertisement-item");
const icon = document.querySelector('.header-general__logo-icon');

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

let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        entry.isIntersecting ? entry.target.classList.add("_rotate") : entry.target.classList.remove("_rotate");
    });
});

observer.observe(icon);

window.addEventListener("scroll", (e)=>{
    let currentOffset = window.scrollY;
    let fullpageSize = document.body.scrollHeight;
    let result = currentOffset * 100 / fullpageSize;
    if(result >= 20){
        advertisementItem.classList.add("_active");
    }else{
        advertisementItem.classList.remove("_active");
    }
})