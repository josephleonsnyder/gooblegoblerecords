const img1 = document.querySelector('img');
const drop = document.querySelector('.particle');
const button = document.querySelector('button');
const title = document.querySelector('.Title');
const btn1 = document.querySelector('.btn1');





function click(){
    console.log('click')
}





img1.addEventListener('click', () => {
    img1.style.borderRadius = "1000px"
    img1.style.transition = "ease-in-out"
    img1.style.transitionDuration = "1000ms"
    img1.style.transform = "scale(110%)"
})


drop.addEventListener('click', ()=>{
    console.log("click")
})


button.addEventListener('click', ()=>{
    console.log("click")
})

title.addEventListener('click', () => {
    location.reload()
}
)

btn1.addEventListener('click', () => {
    location.href = "\home.html"

})




