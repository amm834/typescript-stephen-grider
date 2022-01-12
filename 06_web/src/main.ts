import './style.css'
import {User} from "./models/User";

const user = new User({
    name: "John",
    age: 18
})

user.on('click', () => {
    console.log('clicking #1')
})
user.on('change', () => {
    console.log('changing #1')
})
user.on('change', () => {
    console.log('changing stage 2')
})

user.trigger('click')
user.trigger('change')
user.trigger('changeaaijl')