import {NextFunction, Request, Response} from "express";
import {Controller, Get} from "./decorators";
import {use} from "./decorators/use";

function logger(req: Request, res: Response, next: NextFunction) {
    console.log('some how middleware is working')
    next()
}

@Controller('/auth')
class LoginController {

    @Get('/login')
    @use(logger)
    @use(logger)
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
