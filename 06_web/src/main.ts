import {User} from "./models/User";
import {UserEdit} from "./views/UserEdit";

const user = User.build({name: "NAME", age: 20})
const root = document.getElementById('app')
if (root) {
    const userForm = new UserEdit(root, user)
    userForm.render()
    console.log(userForm)
} else {
    throw new Error('root Element not found')
}