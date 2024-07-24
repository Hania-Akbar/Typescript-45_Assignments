function show_magicians(magicians : string[]){
    magicians.forEach( name => console.log(name)

    );
}
function make_Greet(magicians: string[]){
    return magicians.map(name =>`The Great ${name}`)
}

let magicians_name = ["Farhan" , "Hassan" , "Hussain" ,]
let great_magicians = make_Greet(magicians_name)
console.log(great_magicians);
 show_magicians(great_magicians)
