// Functions Return Type Annotations

// You can also add return type annotations. Return type annotations appear after the parameter list:

function getFavoriteNumber(): number {
    return 3 * 10;
}

console.log(getFavoriteNumber())

// Much like variable type annotations, you usually don’t need a return type annotation because TypeScript will infer the function’s return type based on its return statements.

// Arrow Functions

let sumx = (x: number, y: number): number => {
    console.log('Test')
    // code above return is executeable
    return x + y;
    // code below return is unexecuteable
    console.log('Test')
}

console.log(sumx(40, 20)); // returns 60

let sumz = (x: number, y: number) => x + y; // can skip return

console.log(sumz(50, 150)); // returns 200