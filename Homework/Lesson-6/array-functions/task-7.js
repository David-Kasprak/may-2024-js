let numbers = [11,21,3];

const sortNumbersIntoNewObj = (arrayNum, directionStr) => {
    let sortedNumbers = [];
    if (directionStr === 'ascending') {
        sortedNumbers.push(numbers.sort((a, b) => a - b));
        console.log(sortedNumbers);
    }
    if (directionStr === 'descending') {
        sortedNumbers.push(numbers.sort((a, b) => b - a));
        console.log(sortedNumbers);
    }
}

sortNumbersIntoNewObj (numbers, 'descending');