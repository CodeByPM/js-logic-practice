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
   sum=sum+count ye galat process hai yaha pe count add ho raha hai but result same tabhi ye galat hai
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
