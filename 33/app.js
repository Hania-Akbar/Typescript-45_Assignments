var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var numberOne = numbers_1[_i];
    var OrdinalEnding = void 0;
    if (numberOne === 1) {
        OrdinalEnding = "st";
    }
    else if (numberOne === 2) {
        OrdinalEnding = "nd";
    }
    else if (numberOne === 3) {
        OrdinalEnding = "rd";
    }
    else {
        OrdinalEnding = "th";
    }
    console.log("".concat(numberOne, " ").concat(OrdinalEnding));
}
