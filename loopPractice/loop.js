// ### Sum of digits
// `let num = 1234;
// // 1 + 2 + 3 + 4 = 10
// // Output:
// // Sum: 10`

let num = 1234;
let sum =0;
let count=0
while(num>0){
   num=Math.floor(num/10)
   count++
   sum=sum+count ////ye galat process hai yaha pe count add ho raha hai but result same tabhi ye galat hai
       console.log(sum)
} 

let num=12345;
let sum =0;
while(num>0){
    let digit=num%10 // ye last digit ko remove karega
    sum=sum+digit // yaha pe last digit add hoga
    num=Math.floor(num/10)//remove karega
    console.log(sum)
}

// //Ab Q2 Kar (Individual Digits Print)

let Numbers=5678;

while(Numbers>0){
   let  sum=Numbers%10 // ✅ Last digit nikalo (IMPORTANT!)
    Numbers=Math.floor(Numbers/10)// ✅ Last digit remove karo
    console.log(sum)
}

//////    // 9 feb 2026///////////////

// Q3 Reverse a number
// let num = 1234;
// Output:
// Reversed: 4321

let nums = 45678;////ye varible hai isko utlta karana hai
let reverds=0;
while(nums>0){ //// hane ek looop liya hai ye tab tak chalega jab digit 0 tak na pahuch jaye
    ////ab hamne last digit nikalana hai nums me se isliye % ka use kar rahe ye hame reminder deta hai
    let laststore= nums%10;//// yaha pe hamne isko ek varible me store kar liya hai last digit number// aur ye sirf number dikhta hai usko badalta nahi hai 
    //// ye maigic line hai jo nums ko ulta kar raha hai aur isko formula bhi bol sakte hai
reverds=reverds*10+laststore
nums=Math.floor(nums/10)// digit ko remove karta hai ye use nahi karenge to infine tak loop chalega end hi nahi hoga ek hi number print hoga,ye number ko change karta hai
console.log(reverds)
}

//// digit ko left to right print karo
 let Numbers = 5678;
let reversed = 0;

// Step 1: Number ko reverse kar do
while(Numbers > 0) {
    let digit = Numbers % 10;
    reversed = reversed * 10 + digit;  // ← Magic line!
    Numbers = Math.floor(Numbers / 10);
}

console.log("Reversed number:", reversed);  // 8765

// // Step 2: Ab reversed number ke digits print karo
while(reversed > 0) {
    let digit = reversed % 10;
    console.log(digit);
    reversed = Math.floor(reversed / 10);
 }
                                  //// palindrome check              
let palindromeNumber= 1213;
let orignal=palindromeNumber;// ye palindrome ka clone kardiya hai jise aage ham compare karayenge
let reverse=0 ; // ye number stored hoga jo ulta num hoga
while(palindromeNumber>0){
    let digit=palindromeNumber%10 // ye number nikalega ek digit 
reverse=reverse*10+digit;/// ye number ko add karega
palindromeNumber= Math.floor(palindromeNumber/10); //ye number ko remove karega
}
console.log("revered number:",reverse);
if(orignal===reverse){// yaha pe maine check kiya hai hai ki nahi 
    console.log("palindrome",reverse);
}
else{
    console.log("no",reverse);
}

