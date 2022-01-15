import {User} from "./models/User";
import {UserEdit} from "./views/UserEdit";

const user = User.build({name: "NAME", age: 20})
const root = document.getElementById('app')
if (root) {
    const userEdit = new UserEdit(root, user)
    userEdit.render()
    console.log(userEdit)
} else {
    throw new Error('root Element not found')
}