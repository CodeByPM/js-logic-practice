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

//Q5: Find Smallest in Array
let arr=[45, 12, 78, 3, 56]
let min=arr[0] //smallest variable mein array ka pehla element daalo

for(let i=1;i<arr.length;i++){//Loop chalao i = 1 se array.length-1 tak
    if(arr[i]<min){//Har iteration mein check karo: kya array[i] < smallest?
        min=arr[i]//Agar haan, to smallest = array[i]
    }
}
console.log(min)

//Q6: Count Even Numbers in 
let arraynew= [1, 2, 3, 4, 5, 6, 7, 8]
let count=0
for(let i=0;i<arraynew.length;i++){
    if(arraynew[i]%2==0){
        count++
       
    }
} console.log(count)

//Q7: Check Element Exists
// Task: Array me diya hua element exist karta hai ya nahi, check karo.
// Input: [10, 20, 30, 40], search: 30
// Output: true
// Input: [10, 20, 30, 40], search: 50
// Output: false
let checkArray=[10,20,30,40]
let searchelsement=70
let fount=false
for(let i=0;i<checkArray.length;i++){
    if(checkArray[i]===searchelsement){
        fount=true
        break;
    }
}
if(fount==true){
    console.log(true +" element exits")
}
else{
    console.log(false+" not found")
}

//Q8: Find Index of Element
// Task: Element ka index nikalo
// Input: [10, 20, 30, 40, 50], search: 30
// Output: 2

let rray=[10,20,30,40]
let searchElsement=30
for(let i=0;i<rray.length;i++){
    if(rray[i]===searchElsement){
        console.log(i)
    }
}
// Input: [10, 20, 30], search: 100
// Output: -1 (not found)
let arrayR=[10,20,30,40]
let searchElsements=40
let indexs=-1//-1 ka matlab "not found" — ye ek common convention hai programming mein//Array index hamesha 0,1,2,3... hote hain
for(let i=0;i<arrayR.length;i++){
    if(arrayR[i]==searchElsements){
        indexs=i//Haan! To yaad rakhlo ki ye i index pe mila
    }
}
if(indexs!==-1){
    console.log("found at index",indexs)
}
else{
    console.log("element not found")
}