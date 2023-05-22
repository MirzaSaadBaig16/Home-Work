const colorsArray =["red","green","blue","yellow","pink","purple"];

const btn = document.getElementById('btn');

const color =document.querySelector('.color');

btn.addEventListener("click",function(){
    const randomNumber = getRandomNumbe();
    document.body.style.backgroundColor = colorsArray[randomNumber];
    color.innerHTML = colorsArray[randomNumber];
})
function getRandomNumbe(){
    return Math.floor(Math.random()*colorsArray.length);
}