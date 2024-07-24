let userNames = ["Ali", "Hania" , "Sadaf",  "Admin", "Fatima"];
userNames = []
if(userNames.length === 0){
    console.log("We need to find some user");
    
}else{
    userNames.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello Dear ${oneUser}, would you like to see a status report?`)
        }else {
            console.log(` Hello ${oneUser}, thanks for logging in again.`);
            
        }
    })
}