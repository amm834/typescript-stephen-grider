const add = (a, b) => {
    return a + b;
};
function multiply(a, b) {
    return a * b;
}
const logger = (message) => {
    console.log(message);
};
const throwError = (message) => {
    throw new Error(message);
};
// desctructing
const forcast = {
    date: new Date(),
    message: 'sunny'
};
const logWeather = ({ date, message }) => {
    console.log(date);
    console.log(message);
};
