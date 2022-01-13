import {User} from "./models/User";

const user = new User({
    id: 1,
    name: "new name was created",
    age: 222
})

user.on('save', () => {
    console.log('user was updated')
})

user.save()
console.log(user)