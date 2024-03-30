// Note: All parameters are required

// Named function

function add(x: number, y: number): number {   
    return x + y;
}

console.log(add(7,5));

// Anonymous function

let mymulti = function(x: number, y: number): number { 
				return x * y; 
};

console.log(mymulti(10,5));

// Anonymous function with explict type

let myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { 
												return x+y; 
											};

console.log(myAdd2(30,50))

// Type names dont matter

let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
																return x+y; 
															};
// Lambda functions															

let myAdd4 = (a : number, b : number) => a + b;

// Output will be: var myAdd4 = function(a : number, b : number) {return a + b};

type GreetFunction = (a: string) => void; // Giving type string to GreetFunction and void meaning no value return

function greeter(anything: GreetFunction) { // greeter expects to receive a function that takes a string as an argument and doesn't return any value.
	//...
};

greeter(() => console.log("Test"));