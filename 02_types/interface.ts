interface Vehicle {
    name: string;
    model: Date;
    broken: boolean;
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    model: new Date(),
    broken: true,
    summary(): string {
        return ` 
        Car name is ${this.name}
        Is made in ${this.model} year
        Broken? ${this.broken}`;
    },
};

const printVehicle = (vehicle: Vehicle) => {
    vehicle.summary();
};

printVehicle(oldCivic);
