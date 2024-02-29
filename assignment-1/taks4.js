var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayInfo = function () {
        console.log("make is ".concat(this.make, " and the model is ").concat(this.model, " and the year is ").concat(this.year));
    };
    return Car;
}());
var x = new Car("suzuki", "swift", 2022);
x.displayInfo();
