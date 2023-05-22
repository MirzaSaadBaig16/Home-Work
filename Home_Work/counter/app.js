let counter=document.querySelector('#display')
let btns=document.querySelectorAll('.btn')
console.log(btns)


let count = 0;
btns.forEach((btns) => {
  btns.addEventListener('click', (e) => {
    let styles =e.currentTarget.classList
    if(styles.contains('increase')){
      
      count++
      
} else if(styles.contains('decrease')){
  count--
}else{
  count=0;
}

if (count > 0){
counter.style.color = 'blue'

}
if (count < 0){
  counter.style.color ='red'
}
if (count==0){
  counter.style.color ='grey'
}










counter.textContent = count



})

})

