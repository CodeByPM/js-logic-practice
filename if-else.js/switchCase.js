// today 6 feb 2026 learn switch case  how the work switch case and practice alto of codes problem try building logic in js


//Q 1 exmple day print

let days = "wensaday"

switch(days){
 
    case "monday":
        console.log("stress for every employ");
break;
case "tuesday":
    console.log("work");
break;
    case "wensaday":
       console.log("todo projects to day");
       break;
case "sunday":
     console.log("work holiday");
break
     default:
         console.log("invalid day");
}

//Q2️⃣ Traffic Signal

let signal ="red"

switch(signal){
    case "green":
        console.log("go")
        break;
        case "red":
            console.log("stop")
            break;
            case "yellow":
                console.log("ready")
                break;
                default:
                    console.log("invalid signal")
}

//Q3️⃣ Calculator (Basic)
let a=5
let b = 45

let operator = "-"

switch(operator){
    case "+":
        console.log(a+b);
        break;
        case "-":
        console.log(a-b);
        break;
        case "*":
        console.log(a*b);
        break;
        case "/":
        console.log(a/b);
        break;
        default:
        console.log("invalid operator");
        
}

    //Q4️⃣ User Role

    let role = "user"

    switch(role){
        case "admin":
        console.log("full acesss");
        break;
        case "editor":
        console.log("editing acesss");
        break;
        case "user":
        console.log("read acesss");
        break;
        case "other":
        console.log("only viws acesss");
        break;
        default:
            console.log("no acess")
        
    }

  //  Q5️⃣ Browser Name

    let Browser = "safari";
    switch(Browser){
        case "chrome":
            console.log("google browser")
            break;
             case "firefox":
            console.log("mozilla browser")
            break;
             case "safari":
            console.log("apple browser")
            break;
            default:
                console.log("unknown browser")
    }

    //Q6️⃣ ATM Menu

    let mychoice = 6;
    switch(mychoice){
        case 1:
            console.log("check balance")
            break;
                    case 2:
            console.log("money withdraw")
            break;
        case 3:
            console.log("deposit")
            break;
            
                    case 4:
            console.log("exit")
            break;
default:
    console.log("invalid choice")

    }

//Q7️⃣ Month Number → Season


let month = 19;
switch(month){
    case 12:
        console.log("winter")
        break;
          case 1:
        console.log("winter")
        break;
          case 2:
        console.log("winter")
        break;
          case 3:
        console.log("summer")
        break;
        case 4:
        console.log("summer")
        break;
        case 5:
        console.log("summer")
        break;
        case 6:
        console.log("rainy")
        break;
        case 7:
        console.log("rainy")
        break;
        case 8:
        console.log("rainy")
        break;
        case 9:
        console.log("anutumn")
        break;
        case 10:
        console.log("autumn")
        break;
        case 11:
        console.log("autumn")
        break;
        default:
            console.log("enter only 12 month")
}

//Q8️⃣ Game Difficulty

let level = "hard"

switch(level){
    case "easy":
        console.log("3 lives")
        break;
         case "medium":
        console.log("2 lives")
        break;
         case "hard":
        console.log("1lives")
        break;

        default:
            console.log("default level")
}
 