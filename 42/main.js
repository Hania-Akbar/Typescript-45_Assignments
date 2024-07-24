function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_Greet(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_name = ["Farhan", "Hassan", "Hussain",];
var great_magicians = make_Greet(magicians_name);
console.log(great_magicians);
show_magicians(great_magicians);
