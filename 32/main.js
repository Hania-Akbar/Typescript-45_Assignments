var current_users = ["Ali", "osama", "Bilal", "sana", "Rehma"];
var new_Users = ["Ayesha", "Asim", "Osama", "Sana", "Salman"];
new_Users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
