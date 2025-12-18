// spread for array

let friends:string[] = ["Moshiur"];

let schoolFriends:string[] = ["Sohan" , "Bipul", "Shamim", "Roni"];

let collegeFriends: string[] = ["Sajedul", "Ontor", "Sanjid"];

friends.push(...schoolFriends);
// console.log(friends);


// spread for object

const user = {
    name: "Mezba",
    phone: "0333344433",
    location: "Chittagong"
}

const otherInfos = {
    education: "DU",
    stack: "MERN"
}


const userInfo = {...user, ...otherInfos};
console.log(userInfo);