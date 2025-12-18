// normal function and Arrow function

function addNormal(num1: number, num2:number) : number {
    return num1 + num2;
}


// console.log(addNormal(5,3));


const addArrow = (x:number,y:number):number => x + y;

// console.log(addArrow(12,13));


// object er moddhe function define korbo

const poorUser = {
    name: "Mezba",
    balance: 0,

    addBalance (value:number):number {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}


// console.log(poorUser.addBalance(45))



// এখন আমরা লুপের মধ্যে ফাংশন কিভাবে ডিফাইন করতে হয়, - এটাকে কলব্যাক  ফাংশন বলা হয়।
const arr: number[] = [1,4,6];

const sqrArray = arr.map((el:number):number=> el*el);

console.log(sqrArray);