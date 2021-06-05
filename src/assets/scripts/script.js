
window.addEventListener("resize", (e)=>{
    setGradientWidth();
})

document.addEventListener("DOMContentLoaded", (e)=>{
    setGradientWidth();
})


function setGradientWidth(){
    if(Number(screen.width) === 2560){
        return 0;
    }
    const gradientBar = document.querySelector(".gradient");
    const targetDiv = document.querySelector(".main-general__card-block");
    let targetpx = (Number(screen.width) - Number(targetDiv.clientWidth))/2;
    let targetpercent = (targetpx * 100) / screen.width;
    console.log(targetpx, Math.floor(targetpercent));
    gradientBar.style.right = `${targetpercent}%`;
    return 1;
}
