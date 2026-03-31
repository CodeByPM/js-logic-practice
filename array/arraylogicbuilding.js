//Problem 1: Array ka sum // Input: [10, 20, 30, 40, 50]
// Output: 150
let array=[10, 20, 30, 40, 50]
let sum=0;
for(let i=0;i<array.length;i++){
    sum=sum+array[i]
}
console.log(sum)

// problem 2 Find maximum
// Input: [45, 12, 78, 34, 89, 23]
// Output: 89
                
let maximus=[45,78,89,48,56,,99]
let max=0;
for(let i=0;i<maximus.length;i++){
   if( maximus[i]>max){
       max=maximus[i]
   }
}
console.log(max)

// problem 3  Reverse array
// Output: [5, 4, 3, 2, 1]
let rev=[1, 2, 3, 4, 5];

let ulta=[]
for(let i=rev.length-1; i>=0;i--){
   ulta.push(rev[i])
}
console.log(ulta)

// problem  4 sum of array
let su=[45,78,89,48,56,99]
let sums=0;
for(let i=0;i<su.length;i++){// i =0 se start hota hai maine i=1 se kiya tha jise 0 index pe jo element hota skip ho jata
sums=sums+su[i] // yaha maine ek aur galti kiya maine direct su varible ko assign kardiya tha jise mujhse uske tha i index bhi likha na chahiye tha
}
console.log(sums)