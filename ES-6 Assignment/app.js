// Assignment-01
// Q-1

document.write("<h1>Bio Data</h1>")

let fullName = "Mirza Suban Baig";
const age = 22;
let occupation = "Student";
const email = "suban@gmail.com";
let phoneNumber = "03118448348";
const instituteName = "Jawan Pakistan";
let education = "Bachelor's In Science";

document.write(`Name: ${fullName} <br> Age: ${age} <br> Email: ${email} <br> Phone Number: ${phoneNumber} <br> 
Institute Name: ${instituteName} <br> Education: ${education} <br><br>`)

// --------------------------------------------------------------------------------------------------------------------------
// Q-2
document.write("<h1>Mark Sheet</h1>")

const yourName = prompt("Enter Your Name");
let englishMarks = +prompt("Enter your English Marks");
let physicMarks = +prompt("Enter your Physics Marks");
let islhMarks = +prompt("Enter your Islamiat Marks");
let mathMarks = +prompt("Enter your Math Marks");
let sciMarks = +prompt("Enter your Science Marks");

const totalMarks = (englishMarks + physicMarks + islhMarks + mathMarks + sciMarks);
const perc = ((englishMarks + physicMarks + islhMarks + mathMarks + sciMarks)/500)*100;

let grade;
if (perc > 90){
    grade = "A+";
} else if (perc >= 80) {
    grade = 'A';
} else if (perc >= 70) {
    grade = 'B';
} else if (perc >= 60) {
    grade = 'C';
} else if (perc >= 45) {
    grade = 'D';
} else {
    grade = 'F';
}

document.write(`Name: ${yourName} <br> Obtain Marks: ${totalMarks} <br> Percentage: ${perc} <br> Grade: ${grade}`);

// --------------------------------------------------------------------------------------------------------------------------
Q-3

// function scope

function fo(){
    var a = 20;
    console.log (a);
}
fo();

function foo(){
    let a = 10;
console.log (a);
}
foo();

function fooo(){
    const a = 50;
    console.log (a);
}
fooo();

// Hoisting

console.log(fnaMe);
var fnaMe = "Baig";

console.log(fnAme);
let fnAme = "Baig";

console.log(fname);
const fname = "Baig";

// Re-Assigned

var num = 20;
num = 30;

console.log(num)

let num1 = 10;
num1 = 25;

console.log(num1)

const num2 = 25;
num2 = 35;
console.log(num2);

// Re-Declared

var abc = "Indus";
var abc = "Jawan Pakistan";

console.log(abc)

let abcd = "Indus";
let abcd = "Jawan Pakistan";

console.log(abcd)

const abcde = "Indus";
const abcde = "Jawan Pakistan";

console.log(abcde)