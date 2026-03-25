// //  //🟢 LEVEL 1: PATTERN PRINTING (10 Questions)
// //  // 20 feb 2026
// //  // Q1. Square Pattern

 for(let i=1; i<=5;i++){// outer loop hai jo control kar raha hai row ko 5 baar
     let lines=""// ye varible hai jaha pe ham * store karenge hai 
     for(let j=1;j<=5;j++){// ye inner loop hai jo 5 baar chalega jab outer 1 baar chalega uske andar 5 baar inner loop chalega 
        lines+="*";// abse iske andar 5 baar * print hoga
        // console.log(lines) // yaha pe ham print karenge to pyrimid me print hoga 5 baar

     } console.log(lines) // ye sirf 5 baar * print karega iteration me nahi final wala 
    
 }

// // // Q2. Hollow Square
// // // *****
// // // *   *
// // // *   *
// // // *   *
// // // *****
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
// // //mujhse print karana hai hollow square isme kya hai 5 row hai 5 coln hai ,
// // // isme ek chij common hai 1st row 5 th row me saare star 
// // //hai but 2,3,4 row me 1st coln 5 th coln me start baki space hai ,isme ek varible hai jo *
// // // ko print karana raha hai. thinking- outer loop lenge jo 5 baar row print karega aur 
// // // , ab ek varible lenge jaha start store karenge,ab inner loop banayenge jo 
// // // 5 baar coln print karega (mujhse pata hai 1,5 row me saare star hai) inner loop 
// // // if condition lenge row===1||row===5 ho to varible me * assign kardenge ab
// // // else if condition me coln===1||coln===5 me varible me * assign  karenge 
// // //ab else lenge varible me space assign kar denge 

// // // Q3. Right Angle Triangle

for(let row =1 ; row<=5;row++){
    let star ="";
    for(let coln = 1;coln<=row;coln++){  // row se compare kiye hai jab outer loop 1 baar chalega tab coln <= row se 1 se hi compare karega baar iteration chalega to 1 star hi aayega 
        star+="*"
      console.log(star)
    }  
}

// ////Q4. Inverted Triangle
for(let row =1;row<=5;row++){
    let star=""
    for(let j=1;j<=5-row+1;j++){
        star+="*"
      
    }  console.log(star)
}

// // // 11th march 2026

// // // q5 number pyramid
// // //1
// // // 12
// // //123
// // // 1234
// // //12345
// // // for(let row = 1; row <= 5; row++) {
// // //    let digit = 0  // ❌ Problem 1: 0 se start kiya
// //  //   for(let coln; coln <= 4; coln++) {  // ❌ Problem 2: coln undefined, 4 tak loop
// //  //       digit += coln  // ❌ Problem 3: coln add kar rahe ho
// //  //   }
// //  //   console.log(digit)
// // //}
for(let row =1;row<=5;row++){
    let digit="";
    for(let coln=1;coln<=row;coln++){
        digit+=coln
    }
    console.log(digit)
}
// // // 12 march 2026 morning 8 oclock
// // // q 6 Pattern: 55555,4444,333,22,1
for(let row=1;row<=5;row++){// ye row hai jo 5 baar chalega
    let line="";// khali varible hai jaha pe ham ye assign karenge ki konsa number print karana hai
    let times=5-row+1//ham ye isliye hai ki ye number print karega jaise 5,4,3,2,1
    for(let coln=1;coln<=(5-row+1);coln++){ // yaha pe ye 5-row+1 ye decide kar raha hai ki decrease hote hue chalana hai
        line+=times// yaha pe jo times hai ye number hai jo inner loop decide karega kitini baar print karana hai
    }
    console.log(line)
}

// // // q7 11111,22222,33333,44444
for(let row=1;row<=5;row++){
    let lines="";
    for(let j=1;j<=5;j++){
        lines+=row
        
    }
    console.log(lines)
}

// // // q8 
// // // 1 2 3 4 5 
// // // 2 4 6 8 10 
// // // 3 6 9 12 15 
// // //// 4 8 12 16 20 
// // // 5 10 15 20 25 
for(let row=1;row<=5;row++){
    let lines="";
    for(let j=1;j<=5;j++){
        lines+=(row*j)+" "
        
    }
    console.log(lines)
}
// // // 18march 2026
// ////q9 . Binary Pattern 
// /*1
// 01
// 101
// 0101
// 10101*/
 for(let row=1;row<=5;row++){
    let str="";
    for(let coln=1;coln<=row;coln++){
        if((row+coln)%2==0){
            str+="1"
        }
        else{
          str+="0"
        }
    }
    console.log(str)
 }

// //// 20 march q 10 
// //  1
// //  21
// //  321
// //  4321
// //  54321
for(let row = 1; row<=5;row++){// YE OUTER LOOP 4 BAAR CHALEGA
    let line="";// YE VARIBLE HAI JO PATTERN KO STORE KAREGA
    for(let coln=row;coln>=1;coln--){// INNER LOOP YE DECIDE KAREGA KI KITINI BAAR REPEAT KAREGA
// col = row se start
// col >= 1 tak chalo (end)
// col-- (har baar 1 ghatao)
        line+=coln// YAHA HAM COLN KO VARIBLE ME ASSIGN KARDIYE HAI JO OUTPUT DEGA
    }
    console.log(line)
}
//// q 11 
//// 5
//// 45
//// 345
//// 2345
// //12345
for(let row=1;row<=5;row++){
    let lines="";
    for(let coln=6-row;coln<=5;coln++){

//         Condition galat: coln <= 6-row
// Row 1: 1 <= 5 ✓ (but start row=1 hai, jabki 5 se start hona chahiye tha)
// Actually chahiye tha: col = 6-row se col <= 5

        lines+=coln
      
    }
      console.log(lines)
}
/*
12345
2345
345
45
5*/
for(let row=1; row<=5; row++) {
    let lines="";
    // for(let coln=row; coln<=6-row; coln++)
        for(let coln=6-row;coln<=5;coln++) {  // ❌ CONDITION ULTI
        lines+=coln
       
    } console.log(lines)  // ❌ PRINT ANDAR KAR DIYA
}
// 12345
// 2345
// 345
// 45
// 5
for(let row = 1; row <= 5; row++) {
    let line = "";
    
    // col = row se start, 5 tak, badhao
    for(let col = row; col <= 5; col++) {
        line += col;
    }
    
    console.log(line);
}

////7. Alphabet Square 25 march 2026

// A B C D E
// A B C D E
// A B C D E
// A B C D E
// A B C D E

for(let row=1;row<=4;row++){ // ye line row line ko 4 baar print karega
    let line="";//// ye varible ko store karega
    for(let coln=1;coln<=26;coln++){// ye repeat karega kitane time baar isme value dalna hai
        line+=String.fromCharCode(64+coln)// alphabet print kar raha hai 
    }console.log(line)
}

// q 8
//  A
// B B
// C C C
// D D D D
// E E E E E
for(let row=1;row<=4;row++){ // ye line row line ko 4 baar print karega
    let line="";//// ye varible ko store karega
    for(let coln=1;coln<=row;coln++){// ye repeat karega kitane time baar isme value dalna hai
        line+=String.fromCharCode(64+row)// alphabet print kar raha hai 
    }console.log(line)
}

// 📊 ALPHABET PATTERNS KA FORMULA:
// Case 1: Har row me SAME letter (A, BB, CCC)
// text
// Row1: A
// Row2: B B
// Row3: C C C
// ✅ Loop start = 1 (col=1 se row tak)
// ✅ Value = row se letter (String.fromCharCode(64+row))

// Case 2: Har row me DIFFERENT letters (A, AB, ABC)
// text
// Row1: A
// Row2: A B
// Row3: A B C
// ✅ Loop start = 1 (col=1 se row tak)
// ✅ Value = col se letter (String.fromCharCode(64+col))

// Case 3: Har row me ULTA letters (A, BA, CBA)
// text
// Row1: A
// Row2: B A
// Row3: C B A
// ✅ Loop start = row (col=row se 1 tak, ulta)
// ✅ Value = col se letter (String.fromCharCode(64+col))


//9
// *    
// **   
// * *  
// *  * 
// *****

for(let row=1;row<=5;row++){
    let line=""
    for(let col=1;col<=5;col++){
        if(row===5){
            line+="*"
        }
        else if((row==4&&col==4)||col==1){
      line+="*"
        }
        else if(row==3&&col==3){
                  line+="*"
        }
        else if(row==2&&col==2){
                  line+="*"
        }
        else if(row==1&&col==1){
                  line+="*"
        }
        else{
      line+=" "
        }
        // geralnisation
//  if(col == 1 || col == row || row == 5){
//             line += "*"
//         } else {
//             line += " "
//         }

    }
    console.log(line)
}

// Q10. Number Triangle
// 1
// 22
// 333
// 4444
// 55555

for(let i=1;i<=5;i++){
    let digit=""
    for(let j=1;j<=i;j++){
        digit+=i
    }
    console.log(digit)
}

// Q 11 
//   *
//  ***
// *****
//  ***
//   *
for(let row=1;row<=5;row++){
    let line=""
    for(let col=1;col<=5;col++){
        if((row===5||row==1)&&col==3){
            line+="*"
        }
        else if((row==4||row==2)&&col >= 2 && col <= 4){
            //  Rule 1: Age >= 18 (18 se chhota nahi jayega).
            //  Rule 2: Age <= 30 (30 se bada nahi jayega).
      line+="*"
        }
        else if(row==3){
                  line+="*"
        }
        else{
      line+=" "
        }

    }
    console.log(line)
}