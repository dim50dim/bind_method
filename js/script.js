

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

//////////////////////
let arr = [22,33,44,55,66,77,88];
function findBigNumber(){
    this.textContent = Math.max.apply(null, arr);
}
document.querySelector('.btn5').addEventListener('click',() => {
    findBigNumber.apply(document.querySelector('.out5'),arr);
})