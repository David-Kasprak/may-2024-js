Array.prototype.myForEach = function (callback) {
    for (const item of this) {
        callback(item);
    }
}
const array = [1, 2, 3, 3, 2, 1];
array.myForEach (x => console.log(x))



Array.prototype.myFilter = function (callback) {
    const arrayFiltered = [];
    for (const item of this) {
        if (callback(item)) {
            arrayFiltered.push(item);
        }
    }
    return arrayFiltered;
}



class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
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
const result = cinderellas.myFilter ((value) => value.footSize === 35)
console.log(result)