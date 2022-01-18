"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('403 Forbidden');
}
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
        <div>
            <h1>WELOCME! Logged In</h1>
            <a href="/logout">Logout</a>
        </div>
        `);
    }
    else {
        res.send(`
        <div>
            <h1>You are not logged in.</h1>
            <a href="/login">Login</a>
        </div>
        `);
    }
});
router.post('/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'amm@gmail.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/logout', (req, res) => {
    req.session = null;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send(`
   <h1> Welcome to logged in user from PROTECTED route</h1>
    `);
});
