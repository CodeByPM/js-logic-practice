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

