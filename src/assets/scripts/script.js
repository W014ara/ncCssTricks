
window.addEventListener("resize", (e)=>{
    setGradientWidth();
})

document.addEventListener("DOMContentLoaded", (e)=>{
    setGradientWidth();
})


function setGradientWidth(){
    if((Number(screen.width) === 2560) || (Number(screen.width) <= 1520)){
        return 0;
    }
    let targetpx = (Number(screen.width) - 1500)/2;
    let targetpercent = (targetpx * 100) / screen.width;
    const gradientBar = document.querySelector(".gradient");
    gradientBar.style.right = `${targetpercent}%`;
    return 1;
}
