var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log('chuga chuga');
    };
    Vehicle.prototype.beat = function () {
        console.log('poom....');
    };
    return Vehicle;
}());
var vehicle = new Vehicle();
vehicle.drive();
vehicle.beat();
