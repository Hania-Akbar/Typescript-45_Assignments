let  PlacesToVisit : string[] = ["paris" , "new york" , "rome" , "italy" , "kashmir"];
console.log('original order:',placesToVisit);
console.log("/n Alphabetical Order :", placesToVisit.slice().sort());
console.log('original order:', placesToVisit)
console.log("reverse order ", placesToVisit.slice().sort().reverse());
console.log('original order:',placesToVisit);
console.log("reverse order changed");
placesToVisit.reverse();
console.log(placesToVisit)
console.log("original order:", placesToVisit.sort());
console.log(placesToVisit);
console.log("reverse alphabetical order changed:" , placesToVisit.sort().reverse());
console.log(placesToVisit);

