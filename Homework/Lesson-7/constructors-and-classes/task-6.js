function Car (model, producer, year, maxSpeed, engineVolume, ) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };
    this.info = function () {
        for (const key in this) {
            console.log(key, this[key])
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (name, age) {
        this.driver = {driverName: name, driverAge: age}
    }
}

const car = new Car('model1', 'Toyota', 2020, 350, 999)
console.log(car)

car.drive()
car.info()
car.increaseMaxSpeed(100)
console.log(car)
car.changeYear(2010)
console.log(car)
car.addDriver('john', 34)
console.log(car)