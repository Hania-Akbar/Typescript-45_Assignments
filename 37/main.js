function make_shirts(size, printsMessage) {
    if (size === void 0) { size = "Large"; }
    if (printsMessage === void 0) { printsMessage = 'I love typescript!'; }
    console.log("Creating a ".concat(size, " shirt with ").concat(printsMessage, " printed on it "));
}
make_shirts();
make_shirts("Medium");
make_shirts("Small", "I love Javascript!");
