// 1. nullable

const getUser = (input: string | null) => {
    if(input) {
        console.log(`From database we got : ${input}`);
    }
    else {
        console.log(`From database : All User`);
    }
}


// getUser(null);


// 2. unknown

const discountCalculator = (input: unknown ) =>{
    if(typeof input === 'number') {
        const finalPrice = input * 0.1;
        console.log(finalPrice);
    }
    else if(typeof input === 'string') {
        const [a,b] = input.split(' ');
        const finalPrice = Number(a) * 0.1;
        console.log(finalPrice);
        
    }
    else{
        console.log('Wrong Input')
    }
}

discountCalculator(100);
discountCalculator('100 taka');
discountCalculator(null);





// void

const throwError = (message: string) : never =>{
    throw new Error(message)
} 

throwError('Error');