import './style.css'
import {User} from "./models/User";

const user = new User({
    name: "John",
    age: 18
})

user.on('click', () => {
})
user.on('change', () => {
})
user.on('change', () => {
})

console.log(user)