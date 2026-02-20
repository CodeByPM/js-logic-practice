 //🟢 LEVEL 1: PATTERN PRINTING (10 Questions)
 // 20 feb 2026
 // Q1. Square Pattern

 for(let i=1; i<=5;i++){// outer loop hai jo control kar raha hai row ko 5 baar
     let lines=""// ye varible hai jaha pe ham * store karenge hai 
     for(let j=1;j<=5;j++){// ye inner loop hai jo 5 baar chalega jab outer 1 baar chalega uske andar 5 baar inner loop chalega 
        lines+="*";// abse iske andar 5 baar * print hoga
        // console.log(lines) // yaha pe ham print karenge to pyrimid me print hoga 5 baar

     } console.log(lines) // ye sirf 5 baar * print karega iteration me nahi final wala 
    
 }

// Q2. Hollow Square
// *****
// *   *
// *   *
// *   *
// *****
for(let row =1; row<=5;row++){
    let lines =""
    for(let colunm=1;colunm<=5;colunm++){
        if(row===1||row===5){
            lines+="*" 
        }
        else if(colunm===1||colunm===5){
             lines+="*"
        }
        else{
             lines+=" "
        }
    }
    console.log(lines)
}
//mujhse print karana hai hollow square isme kya hai 5 row hai 5 coln hai ,
// isme ek chij common hai 1st row 5 th row me saare star 
//hai but 2,3,4 row me 1st coln 5 th coln me start baki space hai ,isme ek varible hai jo *
// ko print karana raha hai. thinking- outer loop lenge jo 5 baar row print karega aur 
// , ab ek varible lenge jaha start store karenge,ab inner loop banayenge jo 
// 5 baar coln print karega (mujhse pata hai 1,5 row me saare star hai) inner loop 
// if condition lenge row===1||row===5 ho to varible me * assign kardenge ab
// else if condition me coln===1||coln===5 me varible me * assign  karenge 
//ab else lenge varible me space assign kar denge 

// Q3. Right Angle Triangle

for(let row =1 ; row<=5;row++){
    let star ="";
    for(let coln = 1;coln<=row;coln++){  // row se compare kiye hai jab outer loop 1 baar chalega tab coln <= row se 1 se hi compare karega baar iteration chalega to 1 star hi aayega 
        star+="*"
      console.log(star)
    }  
}

////Q4. Inverted Triangle
for(let row =1;row<=5;row++){
    let star=""
    for(let j=1;j<=5-row+1;j++){
        star+="*"
      
    }  console.log(star)
}
