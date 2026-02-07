let num = 10;
if(num % 2 === 0){
    console.log("Even");
}else{
    console.log("Odd");
}


//  LEVEL 1 EDGE - CASE Thinking

// ### Q1️⃣

// A number is given.

// If it is **multiple of 4 but not multiple of 8**, print `"Special"`

// Otherwise print `"Normal"`.

let Givennumer = 50

if(Givennumer%4==0&&Givennumer%8!==0){
    console.log("special number")
}
else{
    console.log("normal")
}

// ### Q2️⃣

// User enters marks.

// If marks < 0 or > 100 → `"Invalid marks"`

// Else:

// - ≥40 → Pass
// - <40 → Fail

let examMarks = 400

if(examMarks<0||examMarks>100){
    console.log("invalid number")
} else if(examMarks>=40){
    console.log("pass",examMarks)
}

else if(examMarks<40){
    console.log("fail hai chutiya",examMarks)
}

// ### Q3️⃣

// A person enters salary.

// If salary is 0 → `"No income"`

// If salary < 15000 → `"Low income"`

// If salary between 15000–50000 → `"Middle income"`


let salary= 15000

if(salary<=0){
    console.log("no income")
}
else if(salary<15000){
    console.log("low income")
}
else if(salary>=15000&&salary<50000){
    console.log("middle income")
}

else if(salary>50000){
    console.log("high income")
}

//### Q4️⃣

// A year is given.

// If year < 1900 → `"Too old"`

// If year > current year → `"Future year"`

// Else → `"Valid year"`


let years = 1024;
// current years nikalene keliye hame new Dates()ka use karna hai uske baad getFullyears() ka use karna hai current years nikalne keliye
let takeYears= new Date()
let currentYears= takeYears.getFullYear()
if(years<1900){
    console.log("to old years",years)
    //note yaha pe nested if use nahi hoga maine kiya tha but coditions galat ho gaya tab mujhse pata chala ki yaha pe nahi hoga 
}
else if(years>currentYears){
        console.log("future years")
    }
    
else{
console.log("valid years")

}
    
//### Q5️⃣

// A number is given.

// If number is **negative OR zero**, print `"Invalid"`

// Else check:

// - Even → `"Valid Even"`
// - Odd → `"Valid Odd"`


let mynum= 0;

if(mynum<=0){
    console.log("invalid number",mynum)
}

else if(mynum%2==0){
    console.log("even number",mynum)
}

else if(mynum%2!==0){
    console.log("odd number",mynum)
}


//🟡 LEVEL 3: Real Decision Systems


// ### Q6️⃣

// ATM system:

// Inputs: `pinCorrect`, `balance`, `amount`

// - If pin incorrect → `"Card blocked"`
// - If amount > balance → `"Insufficient balance"`
// - Else → `"Withdraw successful"`

let atmpin= 1234;

let CoustmerBlance= 1000;

let Withdraw= 3000

if(atmpin===1234){
    if(Withdraw>CoustmerBlance){
        console.log("insufficient blance")
    }
    else if(Withdraw<CoustmerBlance){
        console.log("money withdrawl sucess full")
    }
}
else{
    console.log("card blocked ")
}


// //### Q7️⃣

// Online class access:

// Inputs: `isLoggedIn`, `cameraOn`

// - Not logged in → `"Login required"`
// - Logged in + camera off → `"Turn on camera"`
// - Logged in + camera on → `"Join class"`


let isLoggedIn = true
let cameraOn = false

if(isLoggedIn){
    if(isLoggedIn&&!cameraOn){
        console.log("turn on camera")
    }
    else if(isLoggedIn&&cameraOn){
        console.log("join class")
    }
} else{
    console.log("loggin required")
}


//### Q8️⃣

// Electric scooter battery:

// - Battery ≤10 → `"Charge immediately"`
// - 11–30 → `"Low battery"`
// - 31–80 → `"Good"`
// - 80 → `"Fully charged"`

let battery=    31;

if(battery<=10){
    console.log("charge immediately")
}
else if(battery>=11&&battery<=30){
    console.log("low battery")
}

else if(battery>=31&&battery<=80){
    console.log("good")
}
else{
    console.log("fully charged")
}

// ### Q9️⃣

// Traffic signal color:

// - `"red"` → Stop
// - `"yellow"` → Ready
// - `"green"` → Go
// - Anything else → `"Invalid signal"`



let Traffic= "yellow";

if(Traffic==="red"){
    console.log("stop")
}

else if(Traffic==="yellow"){
    console.log("ready")
}

else if(Traffic==="green"){
    console.log("go")
}
else{
    console.log("invalid signal")
}

//### Q🔟

// Exam attendance system:

// Inputs: `attendancePercent`

// - <0 or >100 → `"Invalid"`
// - ≥75 → `"Allowed"`
// - <75 → `"Not allowed"`


let attendance= 75;

if(attendance<0&&attendance>100){
    console.log("invalid")
}

else if(attendance>=75){
    console.log("allowed")
}
else if(attendance<75){
    console.log("not allowed")
}


//🔵 LEVEL 4: Multi-Condition Brain Stretch

// ### Q11️⃣

// A number is given.

// If divisible by 2 AND 3 → `"Divisible by 6"`

// If divisible only by 2 → `"Divisible by 2"`

// If divisible only by 3 → `"Divisible by 3"`

// Else → `"Not divisible"`

let dinum=3;
if(dinum%2==0&&dinum%3==0){
    console.log("divisible by 6")
}
 else if(dinum%2==0){
    console.log("divisible by 2")
 }

 else if(dinum%3==0){
    console.log("divisible by 3")
 }

 else{
    console.log("not divisible")
 }

//### Q12️⃣

// Login attempt system:

// Inputs: `attempts`

// - attempts = 0 → `"Try again"`
// - attempts between 1–2 → `"Warning"`
// - attempts ≥3 → `"Account locked"`

let attempt = 3;

if (attempt==0){
    console.log("try again")
}

else if (attempt>=1&&attempt<=2){
    console.log("warning")
    // yaha pe maine galti kiya tha || ka use jise 3 bade bhi ho tabhi warning aa raha tha
}

else if (attempt>=3){
    console.log("account locket")
}

// // ### Q13️⃣

// // Weather advisory:

// // Inputs: `temperature`, `isRaining`

// // - Temp <15 AND raining → `"Cold & Rainy"`
// // - Temp ≥15 AND raining → `"Warm & Rainy"`
// // - Temp ≥30 AND not raining → `"Hot"`
// // - Else → `"Normal"`

let temperature= 33;
let isRaining= false;
if(temperature<15&&isRaining){
    console.log("cold and rainy")
}

else if(temperature>=15&&isRaining){
    console.log("warm and rainy")
}

else if(temperature>=30&&!isRaining){
    console.log("hot")
}

else{
    
    console.log("normal")
}


// 7 feb 2026 

//🟢 PROJECT 1: SMART LOGIN SYSTEM (DIFFERENT HAI)
// ### Inputs:

// - isLoggedIn (true/false)
// - loginAttempts (number)

// ### Rules:

// - Not logged in AND attempts ≥3 → `"Account Locked"`
// - Not logged in AND attempts <3 → `"Try Again"`
// - Logged in → `"Welcome User"`

// 🧠 Twist:

// Order galat hua → wrong output aayega.

let isLoggin = false;
let isLogginAttempt = 9;

if(isLoggin){
    console.log("welcome")
}
else if(!isLoggin&&isLogginAttempt<3){
    console.log("try again")
}

else if(!isLoggin&&isLogginAttempt>=3){
    console.log("account blocked")
}


//## 🟢 PROJECT 2: MOBILE BATTERY ALERT (STATE BASED)

// ### Input:

// - batteryPercent
// - isCharging (true/false)

// ### Rules:

// - battery ≤5 AND not charging → `"Phone will shut down"`
// - battery ≤20 AND not charging → `"Low battery"`
// - charging → `"Charging"`
// - else → `"Battery OK"`

// 🧠 Twist:

// Same battery value, different output based on **state**.

let batteryPercent=78
let isCharging=false;

if(batteryPercent<=5&&!isCharging){
    console.log("phone will shut down")
}
else if(batteryPercent<=20&&!isCharging){
    console.log("low battery")
}
else if(isCharging){
    console.log("phone is charging")
    // yaha pe galti kar diya tha ! use karke matalab battery charge hi nahi ho raha hai 
}
else{
    console.log("battery ok")
}

// ## 🟡 PROJECT 3: BUS TICKET PRICING (CONFLICTING RULES)

// ### Inputs:

// - age
// - isStudent (true/false)

// ### Rules:

// - age <5 → `"Free"`
// - Student (any age) → `"₹50"`
// - age ≥60 → `"₹40"`
// - else → `"₹80"`

// 🧠 Twist:

// Student + Senior → kaunsa chalega?

// Tumhe **priority decide karni hogi**.


let age = 60;

let IsStudent= false

if(age<5){
    console.log("free ticket bus for child ")
}
else 
if(age>=60){
    console.log(" senior citiesen ticket bus 40 rupess ")
//yaha pe ham  senior cityiesn ko pahale priority denge
}

else 
if(IsStudent){
    console.log("free ticket bus 50 rupess ")
}
else{
    console.log("80 rupess")
}


// ## 🟡 PROJECT 4: EXAM RESULT WITH GRACE MARKS

// ### Input:

// - marks

// ### Rules:

// - marks <30 → `"Fail"`
// - marks 30–39 → `"Grace Pass"`
// - marks ≥40 → `"Pass"`
// - marks >100 or <0 → `"Invalid"`

// 🧠 Twist:

// Grace category adds **extra decision layer**.

let marks = 45;
if(marks>100||marks<0){
    console.log("invalid")
}

else if(marks<30){
    console.log("fail")
}

else if(marks>=30&&marks<=39){
    console.log("grace pass")
}

else if(marks>=40){
    console.log("pass")
}


//## 🟡 PROJECT 5: ONLINE ORDER ENGINE (MULTI STATE)

// ### Inputs:

// - cartEmpty (true/false)
// - paymentDone (true/false)
// - addressAdded (true/false)

// ### Rules:

// - cart empty → `"Add items to cart"`
// - cart not empty AND address missing → `"Add address"`
// - cart not empty AND address added AND payment not done → `"Complete payment"`
// - all done → `"Order placed"`

// 🧠 Twist:

// 3 inputs → many paths.

let cartEmpty= true;
let paymentDone = true;
let addressAdded= true;

if(cartEmpty){
    console.log("add items to card")
}

else if(!cartEmpty&&!addressAdded){
    console.log("add adress")
}

else if(!cartEmpty&&addressAdded&&!paymentDone){
    console.log("complete payment")
}
else if(!cartEmpty&&addressAdded&&paymentDone){
    console.log("oder placed")
}

// //## 🔵 PROJECT 6: GAME LEVEL UNLOCK SYSTEM

// ### Inputs:

// - levelCompleted (number)
// - hasPremium (true/false)

// ### Rules:

// - levelCompleted <5 → `"Keep playing"`
// - levelCompleted ≥5 AND not premium → `"Buy premium"`
// - levelCompleted ≥5 AND premium → `"New level unlocked"`

// 🧠 Twist:

// Same number → different result.

let levelCompleted = 6;
let hasPremium = true;

if(levelCompleted<5){
    console.log("keepplaying")
}

else 
if(levelCompleted>=5&&!hasPremium){
    console.log("keepplaying")
}
else 
if(levelCompleted>=5&&hasPremium){
    console.log("new level unlocked")
}
////## 🔵 PROJECT 8: INTERNET SPEED ADVISOR

// ### Input:

// - speedMbps

// ### Rules:

// - speed ≤0 → `"No Internet"`
// - speed <5 → `"Very Slow"`
// - speed 5–20 → `"Good"`
// - speed >20 → `"Fast"`

// 🧠 Twist:

// Boundary values matter.

let speedMbps = 113;
if(speedMbps<=0){
    console.log("no internet")
}

else if(speedMbps<5){
    console.log("very slow internet")
}
else if(speedMbps>=5&&speedMbps<=20){
    console.log("good internet")
}

else if(speedMbps>20){
    console.log("very fast internet")
}

//## 🔴 PROJECT 9: BANK ACCOUNT STATE (REAL WORLD)

// ### Inputs:

// - balance
// - isKYCCompleted (true/false)

// ### Rules:

// - KYC not completed → `"Complete KYC"`
// - balance ≤0 → `"Account Empty"`
// - balance <1000 → `"Low Balance"`
// - balance ≥1000 → `"Healthy Account"`

// 🧠 Twist:

// KYC overrides everything.

let blance =-9
let isKYCCompleted=false;
if (!isKYCCompleted){
console.log("please complete kyc")
}
else if(blance<=0){
   console.log("account empty") 
}
else if(blance<=1000){
   console.log("account low balance") 
}
else if(blance>=1000){
   console.log("healthy account balance") 
}


////## 🔴 PROJECT 10: GAME ATTEMPT + BAN SYSTEM (HARD)
 //## 🔴 PROJECT 10: GAME ATTEMPT + BAN SYSTEM (HARD)

// ### Inputs:

// - attemptsLeft
// - isBanned (true/false)

// ### Rules:

// - isBanned → `"User Banned"`
// - attemptsLeft = 0 → `"Game Over"`
// - attemptsLeft 1–2 → `"Last Warning"`
// - attemptsLeft >2 → `"Keep Trying"`

let attemptsLeft =3;
let isBanned= true;
if(isBanned){
    console.log("user Banned")
}
else if(attemptsLeft==0){
    console.log("game over")
}
else if(attemptsLeft>=1&&attemptsLeft<=2){
    console.log("last warning ")
}
else if(attemptsLeft>2){
    console.log("keep tryping")
}
