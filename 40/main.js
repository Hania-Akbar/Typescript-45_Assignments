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
function myAlbum(artistName, albumTitle, numberofTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberofTracks: numberofTracks };
}
var album1 = myAlbum("Hania", "Rang-e-Muhabbat", 40);
var album2 = myAlbum("Fatima", "Roshan Andhera", 50);
var album3 = myAlbum("Hassan", "Musam-e-Dil", 10);
console.log(album1);
console.log(album2);
console.log(album3);
