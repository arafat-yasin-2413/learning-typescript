const user = {
    id: 123,
    name: {
        firstName: "Mezbaul",
        middleName: "Abedin",
        lastName: "Forhan",
    },
    gender: "male",
    favColor: "Red",
};



// name alias
const {favColor : myFavColor} = user;
console.log(myFavColor);