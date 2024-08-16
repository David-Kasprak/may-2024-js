// function sum (array) {
//     let basket = 0;
//     for (const item of array) {
//         basket = basket + item;
//     }
//     return basket;
// }
// console.log(sum([1, 2, 3]))

const sum = (array) => {
    let basket = 0;
    for (const item of array) {
        basket = basket + item;
    }
    return basket;
}
console.log(sum([1, 2, 3]));