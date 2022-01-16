import {Request, Response, Router} from "express";

interface RequestBody extends Request {
    body: { [key: string]: string | undefined }
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
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
})

router.post('/login', (req: RequestBody
    , res: Response) => {
    const {email, password} = req.body;
    if (email && password && email === 'amm@gmail.com' && password === 'password') {
        req.session = {loggedIn: true};
        res.redirect('/')
    } else {
        res.send('Invalid email or password')
    }
})

router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
        <div>
            <h1>WELOCME! Logged In</h1>
            <a href="/logout">Logout</a>
        </div>
        `)
    } else {
        res.send(`
        <div>
            <h1>You are not logged in.</h1>
            <a href="/login">Login</a>
        </div>
        `)
    }
})

export {router}