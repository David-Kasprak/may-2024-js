let arrA = ['hello', 1, true];

function arrayDisplay (array) {
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
}

arrayDisplay(arrA);
arrayDisplay([1,2,3, 'hello', false]);