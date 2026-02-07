// 7 feb leaarning ternary operator 

let num = 20

let evn= num%2==0?"even":"odd"
console.log(evn)
// example pass/faill
let marks = 45

let gradecheck = marks>40?"pass":"fail"
console.log(gradecheck)

// example 3 battery alert

let batteryp=28;
let isCharging=true

let baterycheck=isCharging?"charging":"not charging"
console.log(baterycheck)

// nested ternary (multiple condition )
 let number = 40;

 let grade=number>70?"A":number>=74?"b":number>=60?"c":"fail"
 console.log(grade)

 //condition1 ? value1
// : condition2 ? value2
// : condition3 ? value3
// : defaultValue

// advanced: ternary with &&

let isLoggin = false
let loginAttempts =5

let logincheck= isLoggin?"welcome":loginAttempts>=3?"try again":"account locked";

console.log(logincheck)

