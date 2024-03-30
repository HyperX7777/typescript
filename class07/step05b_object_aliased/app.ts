// Anonymous / In a shorter way by using =

let teacher : {name: string, exp: number} = {
    name: "Zeeshan",
    exp: 10
}

// Aliased Object Type

type Student = {
    name: string
    age?: number
}

// The Question mark after age means optional

let student: Student = {
    name: "Hira",
    age: 30
}

// Because of optional even if we don't write age still it will work like this:

// let student: Student = {
//     name: "Hira",
// }

console.log(student["name"]);
console.log(student.age);

// Interfaces

interface Manager {
    name: string,
    subordiates?: number
}

let storeManager: Manager = {
    name: "Bilal"
}
