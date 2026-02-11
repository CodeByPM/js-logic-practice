// // ### Sum of digits
// // `let num = 1234;
// // // 1 + 2 + 3 + 4 = 10
// // // Output:
// // // Sum: 10`

// let num = 1234;
// let sum =0;
// let count=0
// while(num>0){
//    num=Math.floor(num/10)
//    count++
//    sum=sum+count ////ye galat process hai yaha pe count add ho raha hai but result same tabhi ye galat hai
//        console.log(sum)
// } 

// let num=12345;
// let sum =0;
// while(num>0){
//     let digit=num%10 // ye last digit ko remove karega
//     sum=sum+digit // yaha pe last digit add hoga
//     num=Math.floor(num/10)//remove karega
//     console.log(sum)
// }

// // //Ab Q2 Kar (Individual Digits Print)

// let Numbers=5678;

// while(Numbers>0){
//    let  sum=Numbers%10 // ✅ Last digit nikalo (IMPORTANT!)
//     Numbers=Math.floor(Numbers/10)// ✅ Last digit remove karo
//     console.log(sum)
// }

// //////    // 9 feb 2026///////////////

// // Q3 Reverse a number
// // let num = 1234;
// // Output:
// // Reversed: 4321

// let nums = 45678;////ye varible hai isko utlta karana hai
// let reverds=0;
// while(nums>0){ //// hane ek looop liya hai ye tab tak chalega jab digit 0 tak na pahuch jaye
//     ////ab hamne last digit nikalana hai nums me se isliye % ka use kar rahe ye hame reminder deta hai
//     let laststore= nums%10;//// yaha pe hamne isko ek varible me store kar liya hai last digit number// aur ye sirf number dikhta hai usko badalta nahi hai 
//     //// ye maigic line hai jo nums ko ulta kar raha hai aur isko formula bhi bol sakte hai
// reverds=reverds*10+laststore
// nums=Math.floor(nums/10)// digit ko remove karta hai ye use nahi karenge to infine tak loop chalega end hi nahi hoga ek hi number print hoga,ye number ko change karta hai
// console.log(reverds)
// }

// //// digit ko left to right print karo
//  let Numbers = 5678;
// let reversed = 0;

// // Step 1: Number ko reverse kar do
// while(Numbers > 0) {
//     let digit = Numbers % 10;
//     reversed = reversed * 10 + digit;  // ← Magic line!
//     Numbers = Math.floor(Numbers / 10);
// }

// console.log("Reversed number:", reversed);  // 8765

// // // Step 2: Ab reversed number ke digits print karo
// while(reversed > 0) {
//     let digit = reversed % 10;
//     console.log(digit);
//     reversed = Math.floor(reversed / 10);
//  }
//                                   //// palindrome check              
// let palindromeNumber= 1213;
// let orignal=palindromeNumber;// ye palindrome ka clone kardiya hai jise aage ham compare karayenge
// let reverse=0 ; // ye number stored hoga jo ulta num hoga
// while(palindromeNumber>0){
//     let digit=palindromeNumber%10 // ye number nikalega ek digit 
// reverse=reverse*10+digit;/// ye number ko add karega
// palindromeNumber= Math.floor(palindromeNumber/10); //ye number ko remove karega
// }
// console.log("revered number:",reverse);
// if(orignal===reverse){// yaha pe maine check kiya hai hai ki nahi 
//     console.log("palindrome",reverse);
// }
// else{
//     console.log("no",reverse);
// }

// // -------------------------------------------------------------10 feb 2026------------------------------------
// // largest digit find in number;

// let smallest= 8639;
//  let max =8// hamne ek varible bana hai jo compare karega digit se jo number nikalega ;
// while(smallest>0){
//     let digit = smallest%10 // last number nikalne keliye
//     if(digit<max)
//       //// digit=max //// yaha maine galat assign kiya hu l
//     max=digit // ab ye sahi pahale digit me 0 assign kiya tha jise 0 print ho raha tha,
//       smallest =Math.floor(smallest/10)  // ye number ko remove karega
// }
// console.log(max)
// let largest= 8639;
//  let max =0// hamne ek varible bana hai jo compare karega digit se jo number nikalega ;
// while(largest>0){
//     let digit = largest%10 // last number nikalne keliye
//     if(digit>max)
//       //// digit=max //// yaha maine galat assign kiya hu 
//     max=digit // ab ye sahi pahale digit me 0 assign kiya tha jise 0 print ho raha tha,
//       largest =Math.floor(smallest/10)  // ye number ko remove karega
// }
// console.log(max)
// //                                     FOR LOOP + IF-ELSE (Logic Building)

// // q7 even number spratly prind karana hai 20 hai 10 even 10 odd

// let countEven=0
// let countOdd=0

// for(let i=1;i<=50;i++){
//     if(i%2==0){
//         countEven++
//     }else{
//         countOdd++
//     }
// }
// console.log("even count",countEven++)
// console.log("odd count",countOdd++)

// // q8 Print only numbers divisible by BOTH 3 AND 5 (1 to 50);
// for(let j=1;j<=50;j++){
//     if(j%3==0&&j%5==0){
//         console.log("divisible by 3 and 5",j)
//     }
// }

// // Q 9 FizzBuzz (Famous Interview Question!)
// 1 to 30 tak:
// - Agar number 3 se divisible → "Fizz"
// - Agar number 5 se divisible → "Buzz"
// - Agar DONO se divisible → "FizzBuzz"
// - Baaki → number print karo

// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// ...
// 15 → FizzBuzz
//  for(let num =1 ; num<=30;num++){
//      if(num%3==0&&num%5==0){
//         console.log("fizzbuzz")
//     }
//      else if(num%3==0){
//         console.log("fizz")
//     }
//     else if(num%5==0){
//         console.log("buzz")
//     }
//     else{
//         console.log(num)
//     }
//  }
// //10 Find largest number in range (1 to 100 jo 7 se divide ho)
// let max =0;
// for(let i=0;i<=100;i++){
//     if(i%7==0&&i>max){
//         max=i
//     }
// }console.log(max)
// // Q11 Find smallest number in range (50 to 100 jo 9 se divide ho)

// let min =Infinity;
// for(let num = 50; num<=100;num++){
//     if(num%9==0&&num<min){
// min=num
//     }
 
// }console.log(min)

// // 12 Count how many numbers are divisible by 4 (1 to 100)
                                                              //// 11 feb 2026 morning 7.50
// let countnum =0;
// for(let i = 1; i<=100;i++){
//     if(i%4==0){
//         countnum++
//     }
// }console.log(countnum)

              