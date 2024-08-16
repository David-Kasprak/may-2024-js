// function arrayDisplay (array) {
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// arrayDisplay([1,2,3, 'hello', false]);

const displayArray = (array) => {
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

displayArray(['hello', 1, true]);