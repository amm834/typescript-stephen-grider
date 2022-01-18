import {Request, Response} from "express";
import {BodyValidator, Controller, Get, Post} from "./decorators";

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


	@Post('/login')
	@BodyValidator('email', 'password')
	postLogin(req: Request, res: Response) {
		const {email, password} = req.body;
		if (email === 'amm@gmail.com' && password === 'password') {
			req.session = {loggedIn: true};
			res.redirect('/')
		} else {
			res.send('Invalid email or password')
		}
	}

	@Get('/logout')
	getLogout(req: Request, res: Response) {
		req.session = null
		res.redirect('/')
	}


}
