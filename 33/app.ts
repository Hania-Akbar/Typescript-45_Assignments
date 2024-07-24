let numbers = [1,2,3,4,5,6,7,8,9]
for(let numberOne of numbers){
    let OrdinalEnding : string;
    if(numberOne === 1){
        OrdinalEnding = "st"
    }else if(numberOne ===2){
        OrdinalEnding = "nd"

    }else if(numberOne === 3){
        OrdinalEnding ="rd"

    }else{ OrdinalEnding = "th"}
    console.log(`${numberOne} ${OrdinalEnding}`);
    }

    
    
