let teacher = {
    name: 'Foji',
    experience: '12'
};

console.log(teacher.name);
console.log(teacher['experience']);

// Type Declaration

let student: {
    name: string;
    age: number;
};

student = {
    name: 'Ali',
    age: 17,
};

console.log("🚀 ~ file: app.ts:5 ~ teacher:", teacher)
console.log("🚀 ~ file: app.ts:12 ~ student:", student['name'])
console.log("🚀 ~ file: app.ts:12 ~ student:", student.age)

// Another way of Type Declaration

let student1: {
    name: string;
    age: number;
} = {
    name: 'Shahmeer',
    age: 18,
};

console.log("🚀 ~ file: app.ts:28 ~ student1:", student1)
