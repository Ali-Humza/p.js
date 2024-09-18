// function abcd() {
//     for (var i = 1; i<10; i++) {
//         console.log(i)
//     }
//     console.log(i);
// }

// abcd();

// let a = [1,2,3,4,5]
// let b = [...a]
// b.pop();

// function biscuitGen() {
//     this.width = 12;
//     this.hieght = 22;
//     this.color = "brown";
//     this.taste = "sweet"
// }
//  let bis1 = new biscuitGen();
//  let bis2 = new biscuitGen();
//  let bis3 = new biscuitGen();

// function createBtn(color,value) {
//     this.hieght = 12;
//     this.width = 12;
//     this.color = color;
//     this.value = value;
//     this.circularbtn = true;
// }

// let btn1  = new createBtn("red","A1");
// let btn2  = new createBtn("blue","b2");


// iife===>

// var ans = (function () {
//     var pasword = 12;

//     return {
//        getter: function() {
//             console.log(pasword);
//         },
//         setter:function(val) {
//             pasword = val
//         }
//     }
// })()

// prototype inheritence==>

// var cow = {
//     canfly: false,
//     canEat: true,
//     cansee: true,
//     Legs: true,
// }
// var human = {
//     Inteligent: true,
//     hands: true,
//     emotions: true,
// }

// human.__proto__ = cow;

let a = prompt("Enter Your Name");
document.write("WELCOME "+ a)