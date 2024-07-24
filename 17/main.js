"use strict";
let shrinkGuestList = ["Zainab", "sonia", "shaista"];
console.log(`${shrinkGuestList[1]}is not coming`);
shrinkGuestList.splice(1, 1, "Anusha");
console.log(`Hey everyonr! We found a bigger dinner table. lets call some more guests`);
shrinkGuestList.unshift("Sunita");
shrinkGuestList.push("Amna");
let midGuest = Math.floor(shrinkGuestList.length / 2);
shrinkGuestList.splice(midGuest, 0, "Maryam");
shrinkGuestList.forEach((shrinkinvitation) => console.log(`Hey${shrinkinvitation},i'd love to catch up over dinner!
How about joining me for a delicious meal this "friday" at "kebabjees".let me knoe if you are free!`));
console.log("Unfortunatly ,new dinner table wont arrive in time for the dinner ,so i have space for only 2 guests for dinner");
while (shrinkGuestList.length > 2) {
    let removeGuest = shrinkGuestList.pop();
    console.log(`Sorry ,${removeGuest}I cant invite you to dinner`);
}
console.log("invitation to the last 2 guests");
shrinkGuestList.forEach(guestinvitation => console.log(`Hey ${guestinvitation} you are still invited for dinner`));
shrinkGuestList.pop();
shrinkGuestList.pop();
console.log(shrinkGuestList, "Empty List ");
