

/////////////////////////
function max(a, b){
    this.textContent = (a > b) ? a : b;
}
  
document.querySelector('.btn2').addEventListener('click', () => {
    max.bind(document.querySelector('.out2'),33,99999)();
})
document.querySelector('.btn3').addEventListener('click', () => {
    max.bind(document.querySelector('.out3'),33,5555555)();
})
document.querySelector('.btn4').addEventListener('click', () => {
    max.bind(document.querySelector('.out4'),33,7777777777)();
})