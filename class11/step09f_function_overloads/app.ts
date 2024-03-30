// Overloads give us type-checked calls

// It's customary to order overloads from most specific to least specific

// Option 1: Concatenate two strings
function add(arg1: string, arg2: string): string; // option 1

// Option 2: Add two numbers
function add(arg1: number, arg2: number): number; // option 2

// Option 3: Perform a logical OR on two booleans
function add(arg1: boolean, arg2: boolean): boolean; // option 3

// This is not part of the overload list, 
// So it has only three overloads
function add(arg1: any, arg2: any): any {
    return arg1 + arg2;
}

// Calling 'add' with any other parameter types would cause an error except for the three options

console.log(add(1, 2));          // Calls option 2, output: 3
console.log(add("Hello", "World")); // Calls option 1, output: "HelloWorld"
console.log(add(true, false));   // Calls option 3, output: true




