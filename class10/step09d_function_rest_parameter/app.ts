// Named function with Rest parameters

function buildName(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
};

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

// Testing


function buildName2(firstName: string, ...restOfName: string[]) {
	console.log(firstName + " " + restOfName.join(" "));
};

var employeeName1 = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");

buildName2('Ali', 'Taha')

// Testing 2

function buildMsg(firstName: string, ...restOfMsg: string[]) {
	console.log(firstName + ", " + restOfMsg.join(" "));
};

var messages = buildMsg("Ali", "what's wrong with you?", "Please tell me bitch", "Huh??");


// Anonymous function type with Rest parameters

var buildNameFun: (fname: string, ...rest: string[]) => string =
function (firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
};

// Note: Rest, optional and default parameters can only
// Be at the end of the parameter list