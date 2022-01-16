import 'reflect-metadata'

const plane = {
    color: 'red'
}

// Attach metadata as a object property
Reflect.defineMetadata('note', 'A not of plane', plane)
Reflect.defineMetadata('noti', 'Some noti from somewhere', plane)

const note = Reflect.getMetadata('note', plane)
const noti = Reflect.getMetadata('noti', plane)

console.log(note)
console.log(noti)

// Attach metadata as a meta property of object property
Reflect.defineMetadata('brightness', '100', plane, 'color')
const brightness = Reflect.getMetadata('brightness', plane, 'color')
console.log(brightness)