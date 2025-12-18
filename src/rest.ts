

const sendInvitations = (...friends: string[] )=> {
    friends.forEach((friend: string) => console.log(`Invitation Sent to ${friend}`))
}


sendInvitations("Pintu", "Chintu", "Bulbul");