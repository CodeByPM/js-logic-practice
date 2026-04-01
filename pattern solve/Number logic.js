//1. Multiplication Table 1 to 5
// 1 2 3 4 5
// 2 4 6 8 10
// 3 6 9 12 15
// 4 8 12 16 20
// 5 10 15 20 25
for(let i=1;i<=5;i++){
    let digit="";
    for(let j=1;j<=5;j++){
        digit+=(i*j)+" "
    }
    console.log(digit)
}

//2 primenumber check 1 to 50

for(let n = 2; n <= 50; n++){

    let isPrime = true; //Assume karte hain:“ye number prime hai”

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(n);
    }
}
// 🔥 Flow ek line me
// number uthao (n)
// assume karo prime hai
// check karo koi divide karta hai kya
// agar mil gaya → break + false
// nahi mila → print
console.log("Prime numbers from 1 to 50:");

for(let num = 1; num <= 50; num++) {        // 1️⃣ Outer loop: har number ke liye
    if(num < 2) {                           // 2️⃣ 1 ko ignore
        continue;
    }
    let isPrime = true;                     // 3️⃣ Maan lo prime hai
    for(let divisor = 2; divisor < num; divisor++) { // 4️⃣ Check potential divisors
        if(num % divisor === 0) {           // 5️⃣ Agar divisible mil gaya
            isPrime = false;                //    → prime nahi
            break;                          //    → aur check karna band
        }
    }
    if(isPrime) {                           // 6️⃣ Agar prime flag still true
        console.log(num);                   //    → print karo
    }
}


// //Q13. Perfect Numbers between 1-100

for(let num=1;num<100;num++){
    let sum=0;
    for(let divisor=1;divisor<num;divisor++){
if(num%divisor===0){
    sum=sum+divisor
}
    }
    if(sum===num){
        console.log(sum)
    }
}
// 📝 PEN-PAPER ALGORITHM
// Har number n = 1 to 100 ke liye:

// Sum variable = 0

// Loop divisor = 1 se n-1 tak

// Agar n divisor se divide hota hai (n % divisor == 0) → sum += divisor

// Loop end hone ke baad, agar sum == n → print n

// Q14 amstrong number  check 
////////////////////////////////////////////////////////////////         1 april 2026 //////////////////////////////////////////
let num=153
let orignal=num // maine yaha mistake kiya tha ki maine num copy nahi kiya tha jise value compare nahi ho raha tha kyuki 0<153 nahi hoga 
let sum=0
while(num>0){
    let digit=(num%10) // ye digit nikalega num se right to left chalta hai
    let cube=(digit*digit*digit) // yaha pe cube hoga
    sum=sum+cube// yaha pe jo bhi cube hua hoga add hoga sum variavle me
    num=Math.floor(num/10) // ye last digit remove kaega num se
}
if(orignal==sum){ // check kar rahe hai ki ye amstrong number hai ki nahi
    console.log( orignal+ "  is amsteong")
}
else{
    console.log(orignal +"not amstrong number")
}
//Q14. Armstrong Numbers between 1-1000
for(let num=1;num<1000;num++){
let orignal=num // maine yaha mistake kiya tha ki maine num copy nahi kiya tha jise value compare nahi ho raha tha kyuki 0<153 nahi hoga 
let temp=num //Digit extract karne ke liye ek copy variable 
let sum=0
while(temp>0){
    let digit=(temp%10) // ye digit nikalega num se right to left chalta hai
    let cube=(digit*digit*digit) // yaha pe cube hoga
    sum=sum+cube// yaha pe jo bhi cube hua hoga add hoga sum variavle me
    temp=Math.floor(temp/10) // ye last digit remove kaega num se
}
if(orignal==sum){ // check kar rahe hai ki ye amstrong number hai ki nahi
    console.log( orignal+ "  is amsteong")
}

}
