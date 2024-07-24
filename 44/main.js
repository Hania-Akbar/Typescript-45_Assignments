function make_Sandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwitch with the following items\n");
    items.forEach(function (firstitem) {
        return console.log(firstitem);
    });
    console.log("\nplease  enjoy your sandwitch\n");
}
make_Sandwitch("Bread", "butter");
make_Sandwitch("Chicken", "Cheese");
make_Sandwitch("tomato", "chicken", "mayo", "onion");
