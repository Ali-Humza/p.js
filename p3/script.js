//functions in javasript:

// EXAMPLE 1=============>

// function sum(x, y) {
//     return x + y;
// }

// console.log(sum(12,12));
// console.log(sum(13,13));
// console.log(sum(14,14));

// ========================================!

// EXAMPLE 2=============>
// function for students admission

// function form(name, age, college) {
//     console.log("His Name is " + name + ".")
//     console.log("He is " + age + " Years Old.")
//     console.log("He is from " + college + " college.")

// }
// // harry admission form //
// console.log(form("harry", 21, "punjab"))

// // ali admission form
// console.log(form("Ali", 18, "islamia"))

// if (true) {
//     const name = "ali";
//     console.log(name);
// }
// console.log(name);


// const sum = (a,b) => console.log(`the sum of ${a} and ${b} is : ${a+b}`)
// sum (12,13)


// function calculater(a, b, operater) {

//     switch (operater) {
//         case "+":
//             return a + b;

//         case "-":
//             return a - b;

//         case "*":
//             return a * b;

//         case "/":
//             return a / b;

//         default: "no operater found"
//             break;
//     }


// }

// console.log(calculater(12,2,"+"));
// console.log(calculater(12,7,"*"));
// console.log(calculater(122,12,"-"));
// console.log(calculater(122,22,"/"));


// const isreverse = (str) => {
//     let re = "";
//     for (let char = str.length - 1; char >= 0; char--) {
//         re = re + (str[char]);

//     }
// return re;

// }
// console.log(isreverse("technical bhi"));
// console.log(isreverse("ALI HAMZA"));
// console.log(isreverse("CODING"));
// console.log(isreverse("JAVASCRIPT"));



//ARRAYS===>
// const persons = [
//     "ali",
//     "harry",
//     "hamza",
//     "raza",
//     "kashif",
//     "umer",
// ];
// console.log(persons[0]);
// console.log(persons[1]);
// console.log(persons[2]);
// console.log(persons.at(-1));
// console.log(persons.at(-3));
// console.log(persons);


// let a = "";
// console.log(typeof a)

// let b = {};
// console.log(typeof b
// )

// let c = [];
// console.log(typeof c)



// let fruits = ["mango", "apple", "banana", "grapes", "peach"];
// for (let item of fruits) {
//     console.log(item)
// }
// for (let  item in fruits) {
// console.log(item)
// }


// let text = "my name is \`ali\` & \n\\\"hamza\" also";
// console.log(text);
// console.log(text.length);
// console.log(typeof text);

// let text = "ali hamza"
// let strArr = Array.from(text)
// let strMap = strArr.map((value,ind)=>
//     `${value}-${ind}`
// )
// console.log(strMap)


// let pie = (Math.PI);
// console.log(pie)


let a = setTimeout(() => {
    document.querySelector("h5").innerHTML = "continue"
    document.querySelector("h5").style.backgroundColor = "blue"
    document.querySelector("h5").style.color = "white"
    document.querySelector("h5").style.height = "50px"
    document.querySelector("h5").style.fontSize = "30px"
    document.querySelector("h5").style.width = "140px"
    document.querySelector("h5").style.borderRadius = "40px"
    document.querySelector("h5").style.paddingTop = "9px"
    document.querySelector("h5").style.paddingLeft = "20px"
    document.querySelector("h5").style.cursor = "pointer"

}, 5000);

