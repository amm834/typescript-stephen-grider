import {NextFunction, Request, Response} from "express";
import {Controller, Get, Use} from "./decorators";


function requiredAuth(req: Request, res: Response, next: NextFunction): void {
	if (req.session && req.session.loggedIn) {
		next()
		return;
	}

	res.status(403).end('403 Forbidden')
}

@Controller()
class RootController {
	@Get('/')
	getRoot(req: Request, res: Response) {
		if (req.session && req.session.loggedIn) {
			res.send(`
        <div>
            <h1>WELCOME! Logged In</h1>
            <a href="/auth/logout">Logout</a>
        </div>
        `)
		} else {
			res.send(`
        <div>
            <h1>You are not logged in.</h1>
            <a href="/auth/login">Login</a>
        </div>
        `)
		}
	}

	@Get('/protected')
	@Use(requiredAuth)
	getProtected(req: Request, res: Response) {
		res.send(`
   			<h1> Welcome to PROTECTED route</h1>
    	`)
	}

}