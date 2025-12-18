// array er jonno spread operator

let friends:string[] = ["Moshiur"];

let schoolFriends:string[] = ["Sohan" , "Bipul", "Shamim", "Roni"];

let collegeFriends: string[] = ["Sajedul", "Ontor", "Sanjid"];

friends.push(...schoolFriends);
console.log(friends);