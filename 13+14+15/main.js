//var transportationMode = ["Audi r8", "Buggatti Chiron", "McLaren"];
//transportationMode.forEach(function (Mode) {
  //  return console.log("I would like to buy a ".concat(Mode));
//});
//console.log("But ".concat(transportationMode[0], " is my Dream Car"));


//Q14
//let GuestList = ["Zainab","Sonia","Shaista"];
//GuestList.forEach((invitation) =>
  //  console.log(`"Hey ${invitation}, I'd love to carch up for dinner!
//How about joining me for a delicious meal this "Friday" at "8 PM" at "kababjees". Let me know if you are free!`)
//);


//Q15
let newGuestList = ["Zainab","Sonia","Shaista"];


console.log(`${newGuestList[1]} is not coming`)

newGuestList.splice(1,1,"Rehab")

newGuestList.forEach((invitation) =>
    console.log(`"Hey ${invitation}, I'd love to catch up for dinner!
How about joining me for a delicious meal this "Friday" at "8 PM" at "kababjees". Let me know if you are free!`)
);
    