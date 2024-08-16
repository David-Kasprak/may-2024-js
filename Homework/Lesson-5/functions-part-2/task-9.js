// function usersDisplay (users) {
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
//     }
// }
// usersDisplay([
//     {id: 1, name: 'john', age: 33},
//     {id: 2, name: 'alex', age: 23},
//     {id: 3, name: 'ellie', age: 25}
// ])

const displayUser = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
displayUser([
    {id: 1, name: 'john', age: 34},
    {id: 2, name: 'alex', age: 43},
    {id: 3, name: 'ellie', age: 23}
])