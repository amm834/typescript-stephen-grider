interface Vehicle {
    name: string;
    model: number;
    broken: boolean;
}

const oldCivic = {
    name: 'civic',
    model: 2000,
    broken: true,
};

const printVehicle = ({ name, broken, model }: Vehicle) => {
    console.log(
        `
        Car name is ${name}
        Is made in ${model} year
        Broken? ${broken}
        `
    );
};

printVehicle(oldCivic);
