function Client (id, name, surname , email, phone, product) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = product;
}

function Product (title, price) {
    this.title = title;
    this.price = price;
}

const clients = [
    new Client(1, 'name1', 'surname1', '123@123.com', '123123123', [new Product('tv', 10000)]),
    new Client(2, 'name2', 'surname2', '123@123.com', '123123123', [new Product('tv', 10000)], new Product('phone', 123123)),
    new Client(3, 'name3', 'surname3', '123@123.com', '123123123', [new Product('tv', 10000)]),
    new Client(4, 'name4', 'surname4', '123@123.com', '123123123', [new Product('tv', 10000), new Product('blender', 3333)], new Product('cup', 232)),
    new Client(5, 'name5', 'surname5', '123@123.com', '123123123', [new Product('tv', 10000)]),
    new Client(6, 'name6', 'surname6', '123@123.com', '123123123', [new Product('tv', 10000)]),
    new Client(7, 'name7', 'surname7', '123@123.com', '123123123', [new Product('tv', 10000)]),
    new Client(8, 'name8', 'surname8', '123@123.com', '123123123', [new Product('tv', 10000)]),
    new Client(9, 'name9', 'surname9', '123@123.com', '123123123', [new Product('tv', 10000)]),
    new Client(10, 'name10', 'surname10', '123@123.com', '123123123', [new Product('tv', 10000)])
];

console.log(clients)