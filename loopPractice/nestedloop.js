// simple loop practice 

for(let num=1;num<=4;num++){
    console.log("loop number",num)
}

// Example 1: The SIMPLEST Nested Loop

for(let classname =1;classname<=2;classname++){
console.log("class name")
   for(let student = 1; student<=3;student++){
    console.log("students",student)
   }
console.log("........")
}

// exmple no 2  adding star 
row
for(let row =1;row<=3;row++){//// pahale outerloop chalega 1 baar uske baad innerloop chalega 8 baar aise work karta hai loop
    let line ="";// ye ham isliye hai varible hai yaha pe * store karenge
    //column
    for(let colun= 1;colun<=8;colun++){//// inner loop hai 
        line+="*"
    }  console.log(line)
}

// Exercise 1: Number Grid
for(let row = 1; row<=3;row++){/// outer loop hoti ye 
    console.log("row",row)
    for(let colun= 1; colun<=3;colun++){
        console.log("hello")
    }
}

