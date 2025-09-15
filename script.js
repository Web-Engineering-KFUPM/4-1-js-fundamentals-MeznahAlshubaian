console.log("%cJS Lab Connected — Start completing the TODOs!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-2: SYNTAX & VARIABLES
// ==========================

// Task 2.1 — declare & reassign
let course = "CIS101";
console.log("Initial course:", course);
course= "CIS102";
console.log("Reassigned course:", course);

// Task 2.2 — const safety
 const SCHOOL = "MyCollege";
// SCHOOL = "OtherCollege"; // we cannot reassign the value of a constant, it will throw an error


// ==========================
// TODO-3: ARITHMETIC & TYPES
// ==========================

// Task 3.1 — arithmetic basics
let x = 8, y = 3;
console.log("x + y =", x+y)
console.log("x - y = ", x-y)
console.log("x * y = ", x * y)
console.log("x / y = ", x / y)
console.log("x % y = ", x%y);

// Task 3.2 — number vs string
// the first two concatenate because of the string ( '+' acts as concatination)
console.log('result of "2" + 3 is:', "2" + 3)
console.log('result of 2 + "3" is:', 2 + "3")
console.log('result of 2 + 3 is:', 2 + 3)

// ==========================
// TODO-4: CONDITIONALS (CORE)
// ==========================

// Task 4.1 — else-if ladder
let ageInput = prompt("Enter your age: ");
let age= Number(ageInput);
if (age < 13) {
    console.log("Child");
} else if (age <= 35) {
    console.log("Young");
} else {
    console.log("Aged");
}

// Task 4.2 — Switch statement
let day ="Mon"
switch (day) {
    case "Mon":
    case "Tue":
    case "Wed":
    case "Thu":
    case "Fri":
        console.log("weekday")
        break;
    case "Sat":
    case "Sun":
        console.log("weekend")
        break;
        default:
            console.log("unknown")
}
// ===============
// TODO-5: LOOPS
// ===============

// Task 5.1 — for loop sum
// TODO: Sum integers 1..10 with a for loop; display the result of total sum.
let sum = 0 ;
for (let i = 1; i < 11; i++) {
    sum += i;
}
console.log("The sum is: " ,sum);

// Task 5.2 — while loop
let t=3;
while (t>0) {
    console.log("The current value oft is: ",t);
    t--;
}
// Read Chapter 4 in zyBooks: Do-While Loop
let j = 1
do {
    j++;
} while (j<5);
console.log("The output od the do while loop is ",j);


// =============================
// TODO-6: FUNCTIONS (DECL, RETURN, ARROW)
// =============================

// Task 6.1 — pure function + return
function add(a,b) {
    return a+b;
}
console.log("Output of the add function is: ",add(2,5));



// Task 6.2 — Arrow functions
// Make an arrow function; const cube = n => n*n*n; cube(3)
const cube = n => n * n * n;
console.log("Output of the cube function is: ", cube(3))

// =================================
// TODO-7: SCOPE & GLOBAL OBJECT (ESSENTIALS)
// =================================

// Task 7.1 — var vs let scope
 {
    var a = 1; // function scoped
    let b = 2; // block scoped
}
console.log("displaying a: ",a) // we can display the var
// console.log("displaying b: ",b) // we cannot display the let

// ==================
// TODO-8: ARRAYS (CORE)
// ==================

// Task 8.1 — create & mutate
// TODO: let nums = [3,1,4]; then push(1), unshift(9), pop(); log final array and length.
let nums = [3,1,4]
nums.push(1)
nums.unshift(9)
nums.pop()
console.log ("num array is: ", nums, "the length is: ",nums.length )

// End of manual — great job! Keep this file open and work task by task.
