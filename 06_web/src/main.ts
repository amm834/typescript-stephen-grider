import {User} from "./models/User";

const user = new User({
    name: "new naaaoiwoajme",
    age: 3399
})


user.events.on('change', () => {
    console.log('changing something')
})

user.events.trigger('change')