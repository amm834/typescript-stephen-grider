const oldCivic = {
    name: 'civic',
    model: 2000,
    broken: true,
};

const printVehicle = ({
    name,
    model,
    broken,
}: {
    name: string;
    model: number;
    broken: boolean;
}) => {
    console.log(
        `
        Car name is ${name}
        Is made in ${model} year
        Broken? ${broken}
        `
    );
};

printVehicle(oldCivic);
