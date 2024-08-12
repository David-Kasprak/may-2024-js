let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write(`<h2>THE USERS WITH "TRUE" STATUS:</h2>`)
for (let trueUser of users) {
   if (trueUser.status === true) {
       document.write(`<h3>${trueUser.name}</h3>`)
   }
}

document.write(`<h2>THE USERS WITH "FALSE" STATUS:</h2>`)
for (let falseUser of users) {
    if (falseUser.status === false) {
        document.write(`<h3>${falseUser.name}</h3>`)
    }
}

document.write(`<h2>THE USERS THAT ARE OLDER THAN 30:</h2>`)
for (let userOver30 of users) {
    if (userOver30.age > 30) {
        document.write(`<h3>${userOver30.name}</h3>`)
    }
}