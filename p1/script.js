// const str = "ali " + "hamza"
// console.log(documentstr)

// var a = prompt("enter no.")
// var b = prompt("enter another no.")

// console.log(document.querySelector(".h1").innerHTML = parseInt(a) % parseInt(b));

// var result = 0.1 + 0.2
// console.log(result.toFixed(1));


//VOTE FORM

// let userAge = 20;
// let country = false;
// let isRegistered = true;

// if (userAge > 18) {
//     if (country) {
//         if (isRegistered) {
//             alert("You Are Able to VOTE")
//         }else{
//             alert("You Are not Able To vote due To Registration Status")    
//         }
//     } else {
//         alert("You Are not Able To vote due To Citizonship Status")
//     }
// }
// else {
//     alert("You Are Not eligible to Vote(younger)")
// }

var num = prompt("enter number");
var isPrime = true;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false
        break;
    }
}

if (isPrime) {
    document.querySelector(".h4").innerHTML = "Number is PRIME"
    console.log("Number is PRIME")
}
else {
    console.log("Number is Not PRIME")
    document.querySelector(".h4").innerHTML = "Number is Not PRIME"
}