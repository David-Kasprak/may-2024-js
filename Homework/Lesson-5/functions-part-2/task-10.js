// function showSmallestNUmber (numbers) {
//     let min = numbers[0]
//     for (const number of numbers) {
//         if (number < min) {
//             min = number
//         }
//     }
//     return min;
// }
// console.log(showSmallestNUmber([-5, 2, 5]));

const displaySmallestNUmber = (numbers) => {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number
        }
    }
    return min;
}
console.log(displaySmallestNUmber([-5, 0, 1, 2, 3]))