// ? : ternary
// ?? : nullish coalescing
// ?. optional chaining


// 1. ternary

const eligibleVoter = (age: number) => {
    const result = age >= 18 ? 'Your are eligible' : 'Not eligible';

    console.log(result);
}


eligibleVoter(4);