let generator = document.getElementById("gengerate-btn")
let copybtn =  document.getElementById("copy-btn")
let paraDisplay = document.getElementById("para")

let option = {
    method: "GET"
    headers: { "x-api-key": apiKey}
}
let generatePara = () => {
    let noOfPara = document.getElementById("no-of-para").ariaValueMax
    let finalURL = url + noOfPara
    fetch(finalURL,options).then()
}
generateBtn.addEventListener("click", generateParas)
window.addEventListener("load", generateParas)