const add = (a: number, b: number): number => {
  return a + b
}

function multiply(a: number, b: number): number {
  return a * b
}

const logger = (message:string) : void => {
    console.log(message);
}

const throwError = (message:string) : never {
    throw new Error(message)
}

// desctructing
const forcast = {
    date:new Date(),
    message:'sunny'
}

const logWeather = ({date,message} : {date:Date,message:string} ) : void => {
    console.log(date);
    console.log(message);
}



