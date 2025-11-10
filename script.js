

function calculate(){
let current=Number(document.getElementById('current').value);
let resistance=Number(document.getElementById('resistance').value);
let power=0;
console.log(current);
console.log(resistance);
power=(current**2)*resistance;
document.getElementById('power').value=power;
console.log(power);
}
