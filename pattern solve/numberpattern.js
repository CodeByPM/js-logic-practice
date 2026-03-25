// 24 march 2026 number pattern solve 
// q1 1 23 345 4567

for(let row =1; row<=4;row++){
    let digit=""
    for(let coln=row; coln<=row*(row-1);coln++){
        digit+=coln+""
    }
    console.log(digit)
}
// Part 1: Pehla Pattern (Row - 1 wala)
// Pattern:

// text

// 1       (Row 1) -> Last: 1
// 23      (Row 2) -> Last: 3
// 345     (Row 3) -> Last: 5
// 4567    (Row 4) -> Last: 7
// Table:

// Row
// Last Number
// Calculation (Last - Row)
// 1	1	1 - 1 = 0
// 2	3	3 - 2 = 1
// 3	5	5 - 3 = 2
// 4	7	7 - 4 = 3

// Sawal: Kyunki Bachaa hua number (0, 1, 2, 3) aa raha hai, isliye hume Row - 1 kyun likha?

// Jawab:
// Dekho sequence ko:

// Row 1: 0 aaya. (Jo ki 1 - 1 hai)
// Row 2: 1 aaya. (Jo ki 2 - 1 hai)
// Row 3: 2 aaya. (Jo ki 3 - 1 hai)
// Har Row mein, "Bachaa hua number" hamesha Row Number se 1 kam hai.
// Isliye humne likha: Row - 1.
// End = Start + Difference
// End = Start + (row - 1)
// End = row + (row - 1)
// End = row + row - 1
// End = 2×row - 1