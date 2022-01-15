import {UserForm} from "./views/UserForm";
import {User} from "./models/User";

const user = User.build({name: "NAME", age: 20})
const userForm = new UserForm(document.getElementById('app'), user)
userForm.render()