function UserFactoryFunction (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new UserFactoryFunction(1, 'name1', 'surname1', '123@gmail.com', '+1234567890'),
    new UserFactoryFunction(2, 'name2', 'surname2', '123@gmail.com', '+1234567890'),
    new UserFactoryFunction(3, 'name3', 'surname3', '123@gmail.com', '+1234567890'),
    new UserFactoryFunction(4, 'name4', 'surname4', '123@gmail.com', '+1234567890'),
    new UserFactoryFunction(5, 'name5', 'surname5', '123@gmail.com', '+1234567890'),
    new UserFactoryFunction(6, 'name6', 'surname6', '123@gmail.com', '+1234567890'),
    new UserFactoryFunction(7, 'name7', 'surname7', '123@gmail.com', '+1234567890'),
    new UserFactoryFunction(8, 'name8', 'surname8', '123@gmail.com', '+1234567890'),
    new UserFactoryFunction(9, 'name9', 'surname9', '123@gmail.com', '+1234567890'),
    new UserFactoryFunction(10, 'name10', 'surname10', '123@gmail.com', '+1234567890')
]

const sortedUsers = users.sort((a, b) => a.id - b.id)
console.log(sortedUsers)