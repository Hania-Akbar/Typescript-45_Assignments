var userNames = ["Ali", "Hania", "Sadaf", "Admin", "Fatima"];
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some user");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello Dear ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log(" Hello ".concat(oneUser, ", thanks for logging in again."));
        }
    });
}
