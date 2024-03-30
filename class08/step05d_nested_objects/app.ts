type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
};

console.log("My Book name is", myBook.name);
console.log("My Book author name is", myBook.author.firstName, myBook.author.lastName);