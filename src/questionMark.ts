// ? : ternary
// ?? : nullish coalescing (null / undefined)
// ?. optional chaining


// 1. ternary

const eligibleVoter = (age: number) => {
    const result = age >= 18 ? 'Your are eligible' : 'Not eligible';

    console.log(result);
}


// eligibleVoter(4);



// const userTheme = undefined;
// const userTheme = null;
// const userTheme = "";
const userTheme = "Green Theme";
// empty string dileo nullish coalescing operator kaj korbe na. 
// Karon, eta shudhu matro (null / undefined) er jonnoi kaj kore. 
const selectedTheme = userTheme ?? 'Light';

console.log(selectedTheme);
