function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_Greet(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_name = ["Farhan", "Hassan", "Hussain",];
var copy_magicians_names = magicians_name.slice();
var copy_great_magicians = make_Greet(copy_magicians_names);
console.log("\nOriginal Array\n");
show_magicians(magicians_name);
console.log('\nCopied Array\n');
console.log(copy_great_magicians);
