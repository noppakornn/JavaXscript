let values1= ['apple', 1, false];
let values2= ['apple', 1, false];
let values3= ['apple', 1, false];

const array = [15, 16, 17, 18];

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns ${returns}`,
    );
    return returns;
}

array.reduce(reducer);