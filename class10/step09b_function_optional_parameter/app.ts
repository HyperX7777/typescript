// Named function with optional parameters

function buildName(firstName: string, lastName?: string) : string {
    if (lastName) // mtlb agr ismey value aa gai toh true ho jayega aur nichey return krega
        return firstName + " " + lastName;
    else // otherwise sirif firstname ayega
        return firstName;
}

let result1 = buildName("Bob");  // ok
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
var result3 = buildName("Bob", "Adams");  // also ok

console.log(result1, '1');
console.log(result2, '2');
console.log(result3, '3');

// Anonymous function type with optional parameters

let buildName1 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};

buildName1('Taha');
buildName1('Ali', 'Jamal');

// Testing

let buildName2 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName?: string) : any {
    if (lastName)
    console.log(firstName + " " + lastName);
    else
    console.log(firstName);
};

buildName2('Taha');
buildName2('Ali', 'Jamal');