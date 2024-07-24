//Q16
var moreGuestList = ["Zainab", "Sonia", "Shaista"];
console.log("".concat(moreGuestList[1], " is not coming"));
moreGuestList.splice(1, 1, "Rehab");
console.log("Hey everyone! We found a bigger dinner table. lets call some more guests");
moreGuestList.unshift("Sunita");
moreGuestList.push("amna");
var middleGuest = Math.floor(moreGuestList.length / 2);
moreGuestList.splice(middleGuest, 0, "Maryam");
moreGuestList.forEach(function (moreinvitation) {
    return console.log("Hey ".concat(moreinvitation, ", I'd love to catch up over dinner!\nHow about joining mr for a delicious meal this \"friday' at \"8 PM\" at \"kababjees\".Let me know if you are free!"));
});
