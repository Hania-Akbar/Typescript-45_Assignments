//Q16
let moreGuestList = ["Zainab","Sonia","Shaista"];


console.log(`${moreGuestList[1]} is not coming`)

moreGuestList.splice(1,1,"Rehab")

console.log(`Hey everyone! We found a bigger dinner table. lets call some more guests`);
moreGuestList.unshift("Sunita")
moreGuestList.push("amna") 
let middleGuest: number=Math.floor(moreGuestList.length/2);
moreGuestList.splice(middleGuest,0,"Maryam");
moreGuestList.forEach((moreinvitation) =>
    console.log(`Hey ${moreinvitation}, I'd love to catch up over dinner!
How about joining mr for a delicious meal this "friday' at "8 PM" at "kababjees".Let me know if you are free!`)
)