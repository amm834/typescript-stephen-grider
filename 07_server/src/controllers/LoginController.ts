import {Request, Response} from "express";
import {controller, get} from "./decorators";

@controller('/auth')
class LoginController {

    @get('/login')
    getLogin(req: Request, res: Response) {
        res.send(`
    <form method="POST">
         <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
         </div>
         <div>
            <label for="password">Password</label>
            <input type="password" id="password" name="password">
        </div>
        <button>Login</button>
    </form>
    `)
    }
}

//
// @controller('/auth')
// class LoginController {
//     @get('/login')
//     getLogin(req: Request, res: Response): void {
//         const {email, password} = req.body;
//         if (email && password && email === 'amm@gmail.com' && password === 'password') {
//             req.session = {loggedIn: true};
//             res.redirect('/')
//         } else {
//             res.send('Invalid email or password')
//         }
//
//     }
// }