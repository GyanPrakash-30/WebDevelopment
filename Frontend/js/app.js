// //pq1
// let num = 30;
// if (num%10 == 0) {
//   console.log("Good");
// } else {
//   console.log("Bad");
// }
// //pq2
// let name = prompt("enter your name ");
// let age = prompt("enter your age");
// alert(`${name} is ${age} years old`);
//pq3
// let quarter = 1;
// switch (quarter) {
//   case 1:
//     console.log("January,February,March");
//     break;
//   case 2:
//     console.log("April,May,June");
//     break;
//   case 3:
//     console.log("July,August,September");
//     break;
//   case 4:
//     console.log("October,November,December");
//     break;
//   default:
//     console.log("not a quarter");
// }
//pq4
// let char="Apple";
// if((char[0] === "a" || char[0] === "A") & char.length > 5){
//     console.log("Golden string");
// }
// else{
//     console.log("not golden string");
// }
//pq5
// let a=22;
// let b=15;
// let c=24;
// if(a>b){
//     if(a>c){
//         console.log(a, "is largest");
//     }
//     else{
//         console.log(c, "is largest");
//     }
// }
// else{
//     if(b>c){
//         console.log(b, "is largest");
//     }
//     else{
//         console.log(c, "is largest");
//     }
// }
//pq6
// let num1=32;
// let num2=47852;
// if(num1 % 10 == num2 % 10){
//     console.log("numbers have the same last digit which is",num1%10);
// }
// else{
//     console.log("numbers have not the same last digit which is",num1%10);

// }
// let msg="  hello!  ";
// let newmsg=msg.trim().toUpperCase();
// console.log(newmsg);

// let name= "ApnaCollege";
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna","Our"));
// console.log(name.slice(4).replace("l","t"));

// let tic = [
//   ["X", null, "O"],
//   [null, "X", null],
//   ["O", null, "X"],
// ];
// console.log(tic);
// tic[0][1]="O";

// let arr = [7,9,0,-2];
// let n=3;
// let newarr = arr.slice(0,n);
// let arr2 = arr.slice(length-n);

// if(str.length == 0){
//     console.log("String is blank");
// }
// else{
//     console.log("String is not blank");
// }

// let str = "GyAnPRAKaSH";
// let idx = 3;

// if(str[idx] == str[idx].toLowerCase()){
//     console.log("Character is lowercase");
// }
// else{
//     console.log("Character is not lowercase");
// }
// let str = prompt("Enter any string");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);

// let arr = ['hello',2,25,64,'*'];
// let item = 'hello';

// if(arr.indexOf(item) == -1){
//     console.log("Element does not exist in array");
// }
// else{
//     console.log("Element does exit in array");
// }

// let arr = [1,2,3,4,5,6,2,3,4,5];
// let num =2;

// for(let i = 0 ; i<arr.length ; i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
// }

// console.log(arr);

// let number = 287152;
// let d = 0;

// let copy = number;

// while (copy > 0) {
//     d++;
//     copy = Math.floor(copy/10);
// }

// console.log(d);

// let num = 287152;
// let sum= 0;

// let copy = num;

// while(copy > 0){
//     digit = copy % 10;
//     sum+=digit;
//     copy =Math.floor(copy/10) ;
// }
// console.log(sum);

// let dice = Math.floor(Math.random() * 6) + 1 ;
// console.log(dice);

// let car = {
//     name: "bmw",
//     model: "247S",
//     color: "blue",
// };
// console.log(car.name);

// let person = {
//     name:"gyan prakash",
//     age:"21",
//     city:"motihari",
// };
// console.log(person.city);
// person.city = "new york";
// console.log(person.city);
// person.country = "united state";
// console.log(person);

// const arrayAverage = (arr) => {
//   let total = 0;
//   for (let number of arr) {
//     total += number;
//   }
//   return total / arr.length;
// };
// let arr = [1, 2, 3, 4, 5];
// console.log(arrayAverage(arr));

// const Even = (n) => {
//   return n % 2 == 0;
// };
// console.log(Even(5));

// let input = document.createElement("input");
// let button = document.createElement("button");
// button.innerText = "Click Me";
// input.setAttribute("placeholder", "Username");
// button.setAttribute("id", "btn");
// document.querySelector("body").append(input);
// document.querySelector("body").append(button);

// document.querySelector("#btn").style.backgroundColor = "blue";
// document.querySelector("#btn").style.color = "white";

// let h1 = document.createElement("h1");
// h1.innerHTML = "<u>DOM Practice</u>";
// h1.style.color = "purple";
// //h1.style.textDecoration = "underline";
// document.querySelector("body").append(h1);

// let p = document.createElement("p");
// p.innerHTML = "Apna College <b>Delta</b> Practice";
// document.querySelector("body").append(p);

let btn = document.querySelector("button");

btn.addEventListener("mouseout", function () {
    console.log("Mouse out event triggered");
});

// let input = document.querySelector("input");
// input.addEventListener("keypress", function () {
//     console.log("Key press event triggered");
// });

// document.querySelector("textarea").addEventListener("scroll", function () {
//     console.log("Scroll event triggered");
// });

btn.addEventListener("click", function () {
    console.log("Button clicked");
    this.style.backgroundColor="green";
});