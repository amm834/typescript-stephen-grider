import {Request, Response} from "express";
import {Controller, Get} from "./decorators";

@Controller('/auth')
class LoginController {

    @Get('/login')
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
