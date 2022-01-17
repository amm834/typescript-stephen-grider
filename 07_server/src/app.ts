import express from "express"
import {router} from "./routes/loginRoute";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import './controllers/LoginController'
import {AppRouter} from "./AppRouter";

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieSession({keys: ['secret_key']}))
app.use(router);
app.use(AppRouter.getInstance)

app.listen(3000, () => {
    console.log('Application is running on port 3000')
})