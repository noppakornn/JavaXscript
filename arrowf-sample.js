// Arrowfunction with two arguments
const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
};
console.log(sum(2, 5)); // Prints; 7

//Arrow function with no arguments
const printHello = () => {
    console.log("Hello");
};
printHello(); // Prints: hello

//Arrow functions with a single argument
const checkWeight = (weight) => {
    console.log(`Baggege weight : ${weight} kilograms.`);
};
checkWeight(25); // Print: Baggage weight : 25 kilograms.

// Concise arrow functions
const mutiply = (a, b) => a * b;
console.log(mutiply(2, 30)); // Prints: 60