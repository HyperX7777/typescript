// First way to make vowel checker

let alph = "A";

if (
  alph == "a" ||
  alph == "e" ||
  alph == "i" ||
  alph == "o" ||
  alph == "u" ||
  alph == "A" ||
  alph == "E" ||
  alph == "I" ||
  alph == "O" ||
  alph == "U"
) {
  console.log("It is a vowel");
} else {
  console.log("It is not a vowel");
}

// Second way to make a vowel checker

/*

alph = "B".toLowerCase();
if (alph == "a" || alph == "e" || alph == "i" || alph == "o" || alph == "u") {
  console.log("Vowels");
} else {
  console.log("Not a vowels");
}

*/

// Third way to make a vowel checker

/*

let alph = "Z";

let vowels = ["a", "e", "i", "o", "u"];

if (vowels.includes(alph.toLowerCase())) {
  console.log("Vowels");
} else {
  console.log("Not Vowels");
}

*/