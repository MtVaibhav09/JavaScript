// Immediately Invoked Function Expressions (IIFE)
// Global Scope Ke Pollution ko hatane ke liye hme IIFE ka use krna hota hai

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();                                 //  Here we have used ()() which apply iife


(() => {
    console.log(`DB CONNECTED TWO`);
})(); 