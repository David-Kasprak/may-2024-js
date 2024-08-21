class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(princeName, princeAge, shoeHeFoundSize) {
        this.name = princeName;
        this.age = princeAge;
        this.shoeHeFound = shoeHeFoundSize;
    }
}

const cinderellas = [
    new Cinderella('Mary', 20, 36),
    new Cinderella('name2', 21, 37),
    new Cinderella('name3', 22, 38),
    new Cinderella('name4', 23, 39),
    new Cinderella('name5', 24, 35),
    new Cinderella('name6', 25, 37),
    new Cinderella('name7', 26, 35),
    new Cinderella('name8', 27, 37),
    new Cinderella('name9', 28, 38),
    new Cinderella('name10', 29, 38)
]

const prince = new Prince('Richard', 25, 36);


console.log(prince)
console.log(cinderellas)

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoeHeFound) {
        prince.wife = cinderella;
    }
}
console.log(prince)

const cinderellaFound = cinderellas.find(value => value.footSize === prince.shoeHeFound)
console.log(cinderellaFound)