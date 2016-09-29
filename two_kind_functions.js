//The first one is called function Expression
----
var isWeekday = function (day) {

}

//And this is called function declaration.
-----
function isWeekday (day) {

}

// How are the different? They are actually similar.
// How you call them is exactilly the same.
// The difference lies in how the browser loads them into the execution context.
// Function declarations load before any code is executed.
// Funciton Expressions load only when the interpreter reaches that line of code.

more information about these funciton can be found in the link below:
http://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip
