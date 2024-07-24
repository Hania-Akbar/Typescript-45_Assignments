// function myAlbum(artistName: string , albumTitle:string){
//     return {artistName ,albumTitle}
// }

// let album1 = myAlbum("Hania" , "Rang-e-Muhabbat" );
// let album2 = myAlbum("Fatima" , "Roshan Andhera" );
// let album3 = myAlbum("Hassan" , "Musam-e-Dil" );

// console.log(album1);
// console.log(album2);
// console.log(album3);


//Number of Tracks
function myAlbum(artistName: string , albumTitle:string , numberofTracks:number){
    return {artistName ,albumTitle ,numberofTracks}
}

let album1 = myAlbum("Hania" , "Rang-e-Muhabbat" ,40 );
let album2 = myAlbum("Fatima" , "Roshan Andhera" , 50);
let album3 = myAlbum("Hassan" , "Musam-e-Dil" , 10 );

console.log(album1);
console.log(album2);
console.log(album3);
