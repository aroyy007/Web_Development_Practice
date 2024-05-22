//Immediately Invoked Function Expressions (IIFE)

// IIFE is a function that is executed right after it is created. 
//It is a design pattern which is also known as Self-Executing 
//Anonymous Function and contains two major parts: 

// The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately executing function expression () 
//through which the JavaScript engine will directly interpret the function.

(function chai()
{
    console.log("Chai peelo");
})();  // Chai peelo // IIFE is executed immediately after it is created

( () => console.log("Again chai peelo") )();

( (name) => console.log(`Hello ${name}`) )("Chai");
