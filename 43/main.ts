function show_magicians(magicians : string[]){
    magicians.forEach( name => console.log(name)

    );
}
function make_Greet(magicians: string[]){
    return magicians.map(name =>`The Great ${name}`)
}

let magicians_name = ["Farhan" , "Hassan" , "Hussain" ,]
let copy_magicians_names = magicians_name.slice()

let copy_great_magicians = make_Greet(copy_magicians_names)
console.log("\nOriginal Array\n");
show_magicians(magicians_name)
console.log('\nCopied Array\n');
console.log(copy_great_magicians);

