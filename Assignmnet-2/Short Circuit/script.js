// Q:1
// i 
let exp = "faraz" || (true + false) + 5 && " " || "true";
// "faraz" || 7 && " " || "true"
// "faraz" || " " || "true"
// "faraz"
console.log(exp);

// ii 
let b = 3;
let exp1 = (1 + 2) + ++b || 5 && 0 ;
// 3 + 4 || 5 && 0
// 7 || 0
// 7
console.log(exp1);

// iii 
let a = 5;
let exp2 = 32 && true - ++a && " " || "true";
// 32 && true - 6 && " " || true 
// -5 && " "
// " "
console.log(exp2);

// iv 
let exp3 = (true + 3) * 5 && undefined || "faraz" + 5;
// undefined || "faraz5"
// faraz5
console.log(exp3);

// v 
let exp4 = 32 + "abc" || (true + false) + false || + 5 || "true";
//32abc ||  5
// 32abc
console.log(exp4);

// vi 
let exp5 = false || (true + true) + 15 && "" || 50;
// 17 && 50
// 50
console.log(exp5);

// vii 
let exp6 = (true + false) + 5 || false + 8 + "abc" || "true";
// 6 || 8abc 
// 6
console.log(exp6);

// viii 
let exp7 = "faraz" || false + 10 || "true";
// "faraz" || "true"
// "faraz"
console.log(exp7);

// ix 
let exp8 = 12 + (false + false) + true && null || "faraz";
// 13 && "faraz"
// "faraz"
console.log(exp8);

// x 
let exp9 = (false + true + false + 2) || "faraz" && false || 1 + 10;
// 3 || "faraz" && 11
// 3 || 11
// 3
console.log(exp9);

// xi 
let exp10 = (true + false) + 5 || false + 8 + "abc" || "true";
// 6 || "8abc" || true
// 6
console.log(exp10);

// xii 
let exp11 = (true + false) * 3 && "" || false + true - (12 + true + true + false);
// 3 && "" || -13
// 3 && -13
// -13
console.log(exp11);