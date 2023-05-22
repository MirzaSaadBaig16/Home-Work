const btn = document.getElementById("btn")
const RandNum = Math.floor(Math.random()*10)
let att = 0

const middleText = document.getElementById("middleText")
const bottomText = document.getElementById("bottomText")

btn.addEventListener("click",()=>{
    const input =document.getElementById("number")
    number= input.value

    if(number){
        att++;
        if(number==RandNum){
            middleText.innerHTML = `you choosed right number`;
            bottomText.innerHTML = `Conguralation You choosed No. ${number} in ${att} Attemp`;
            btn.addEventListener("click",() =>{
            });
        } else if(number < RandNum){
            middleText.innerHTML = `You choosed no. ${number} is too low, please Try Again`;
            bottomText.innerHTML = `No of attemp is ${att}`;
        }
        else if(number > RandNum){
            middleText.innerHTML = `You choosed no. ${number} is too high, please Try Again`;
            bottomText.innerHTML = `No of attemp is ${att}`;
        }
        else {
            middleText.innerHTML = `Wrong input Please try again`;
            bottomText.innerHTML = `No. of attemp is ${att}`;
        }
    } else {
        middleText.innerHTML = 'Please Enter Any Number';
    }
    input.value = '';
})