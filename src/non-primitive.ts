// array, object

let bazaList : string[] = ['eggs', 'milk', 'sugar']; 
// bazaList.push(5);


let mixedArr : (string | number)[] = ['eggs', 12, "milk", 1, "sugar", 2];
mixedArr.push('apple');

// console.log(mixedArr);


// tuple
let couple: [string, string] = ["Husband", "wife"];
// fixed length er ekta tuple



let nameAndRoll : [string, number] =["Mezba", 79];

let journey : [string, string, number] = ["Dhaka", "Chattogram", 7]


const user : {
    readonly organization: string;
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
} = {
    organization: "Programming Hero",
    firstName: "Mezbaul",
    middleName: "Abedin",
    lastName: "Forhan"
}

// user.organization = "Interactive Cares";
console.log(user);

// define korar somoy kono field missing rakha jabe na
// Literal type : Jokhon value nijei type hishebe boshe