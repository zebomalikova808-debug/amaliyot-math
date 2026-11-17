// let a = -1.5784378;

// console.log(Math.ceil(a));
// console.log(Math.round(a));
// console.log(Math.trunc(a));
// console.log(Math.floor(a));

// let randomSon = Math.ceil(Math.random()  * 100) + 100;

// console.log(randomSon);

// console.log(Math.sqrt(100));

// let son = 50;

// if (son > 50) {
//     alert("50 dan katta son")
// } else if (son === 50) {
//     alert("son 50 ga teng")
// } else {
//     alert("50 dan kichik son")
// } 

alert ("Hozir sizga random son chiqadi");

let randomSon = Math.ceil(Math.random() * 100) +100;

if ( randomSon  % 2 === 1) {
    alert(randomSon + " toq son")
} else{
    alert (randomSon + " juft son")
}


let a = +prompt("Birinchi sonni kiriting"); 
let b = +prompt("Ikkinchi sonni kiriting");
let javob = confirm("Agar OK tugmasini bossangiz sonlar qo'shiladi. \nAgar OTMEHA tugmasini bossangiz sonlar ayriladi.");


if (javob === true) {
    alert(a + b);
} else if ( a - b < 0) {
    alert("Sonlarni bir-biridan ayirib bo'lmaydi.");
}
else {
    alert(a-b);
}