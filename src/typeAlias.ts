type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    gender: 'male' | 'female'; // union type
    contact: string;
    address: {
        division: string;
        city: string;
    };
};


const user1: User = {
    id: 124,
    name:{
        firstName: "Mr.",
        lastName: "X",
    },
    gender: "male", 
    contact: "022222224343",
    address: {
        division: "Khulna",
        city: "Gopalganj",
    }
}

const user2: User = {
    id: 125,
    name:{
        firstName: "Ms.",
        lastName: "Foyjunnesa",
    },
    gender: "female", 
    contact: "054324343",
    address: {
        division: "Rajshahi",
        city: "Naogaon",
    }
}


// console.log(user2);



type IsAdmin = true;
const isHeAdmin : IsAdmin = true;

type Name = string;
const myName : Name = "Shakil Ahmed Atik";

// console.log(isHeAdmin);



type AddFunc = (num1:number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;


console.log(add(13, 14))