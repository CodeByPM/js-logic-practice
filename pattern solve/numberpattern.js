// 24 march 2026 number pattern solve 
// q1 1 23 345 4567

for(let row =1; row<=4;row++){
    let digit=""
    for(let coln=row; coln<=row+(row-1);coln++){
        digit+=coln
    }
    console.log(digit)
}