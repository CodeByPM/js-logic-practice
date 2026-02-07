//Q1 print 1se 20 tak odd number
for(let i = 1; i<=20;i++){
    if(i%2!==0){
        console.log(i)
    }
}
//Q1: Print 1 to 10

for(let num= 1;num<=10;num++){
    console.log(num)
}
//

//q2 Print 50 to 1 (Reverse)and even ho

let num = 50;
for(num;num>=1;num--){
    if(num%2==0)
    console.log(num)
}

//q3 Print numbers divisible by 5 (1 to 50)

for(let i =1; i<=50;i++){
    if(i%5==0){
console.log(i)
    }
    
}

 // q4 Print multiples of 3 from 3 to 30
 let mult = 3
for(let i=1;i<=10;i++){
    console.log(mult*i)
}

// Print "Hello" 20 times

for(let i=1;i<=20;i++){
    console.log("hello")
}

// q5 Print numbers with messages
for(let i=1;i<=20;i++){
    console.log("number"+i)
}

Q 6 Sum of 1 to 100

let sum =0;
for(let i =1;i<=100;i++){
    sum=+i// sum value jakar assign ho jate hai
    sum=sum+i// yaha pe addition real wala hua hai 
    console.log(sum)
}

//// Q7 Sum of all EVEN numbers (1 to 50)

let sum =0
for(let j =1;j<=50;j++){
    if(j%2==0){
        sum=sum+j
        console.log(sum)
    }
}

// Q8 Sum of all EVEN numbers (1 to 50)

let sum =0
for(let j =1;j<=50;j++){
    if(j%2!==0){
        sum=sum+j
        console.log(sum)
    }
}

// q9 Multiplication table of 7
let num=7
for(let i=1;i<=10;i++){
    console.log(`7X${i}=${num*i}`)
}

// q10 factorial of 5

let sum =1;
for(let i=5;i>=1;i--){
    sum= sum *i

    console.log(sum)
}

//Q11 Power Calculator (2^10)

let mult = 2//// maine mult isliye jab mai 10 baar loop chalaunga to 10 baar 2 print hoga
let sum =1
for(let i = 1;i<=10;i++){// yaha pahale maine check kiya print 2 ho raha hai ki nahi 10 baar
    sum=mult*sum ////maine socha  ki ek varible banau jaha pe mai 2 ,10 baar send karke uska multiple kardu to power nikal aayega wahi kiya
    ////// SHURU ME:
// mult = 2  (ye constant rahega, change nahi hoga)
// sum = 1
// i = ?

// // ==========================================
// // ITERATION 1:
// // ==========================================
// i = 1
// sum = mult * sum
// sum = 2 * 1  ← mult (2) × sum ki PURANI value (1)
// sum = 2  ← NAYI value
// console.log(sum) → Output: 2
// // ==========================================
// // ITERATION 2:
// // ==========================================
// i = 2
// sum = mult * sum
// sum = 2 * 2  ← mult (2) × sum ki PURANI value (2)
// sum = 4  ← NAYI value
// console.log(sum) → Output: 4
// // ... aise hi 10 baar
// // ==========================================
// // ITERATION 10:
// // ==========================================
// i = 10
// sum = mult * sum
// sum = 2 * 512  ← 2 × 512
// sum = 1024
// console.log(sum) → Output: 1024

// Final: 2^10 = 1024 ✅
     console.log(sum)
}

//q12 Average of 1 to 10

let sum =0
let result= undefined;
for(let i=1;i<=10;i++){
    sum=sum+i
    if(i===10){
  result=sum/i
    console.log(result)
    }
  
}

//Q13 Count digits in a number

let num =12345;
let count = 0; // ye hame count batayega kitne baar divide hua;
// yeloop jab tak chalega jab tak 0 na ho jaye num
for(;num>0;){// ye syntax aur iska use pahli baar dekha hai
num= Math.floor(num/10);// ek digit remove karega
count++
console.log("digit",count)
}


