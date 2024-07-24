let current_users = ["Ali", "osama", "Bilal","sana", "Rehma"]
let new_Users = ["Ayesha", "Asim", "Osama", "Sana","Salman"];
new_Users.forEach(new_one_user =>{
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase()=== new_one_user.toLowerCase() );
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`);

    }else {
        console.log(`This Username ${new_one_user} is available`);
        
         
    }
})