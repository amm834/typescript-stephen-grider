"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("./decorators");
function requiredAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).end('403 Forbidden');
}
let RootController = class RootController {
    getRoot(req, res) {
        if (req.session && req.session.loggedIn) {
            res.send(`
        <div>
            <h1>WELCOME! Logged In</h1>
            <a href="/auth/logout">Logout</a>
        </div>
        `);
        }
        else {
            res.send(`
        <div>
            <h1>You are not logged in.</h1>
            <a href="/auth/login">Login</a>
        </div>
        `);
        }
    }
    getProtected(req, res) {
        res.send(`
   			<h1> Welcome to PROTECTED route</h1>
    	`);
    }
};
__decorate([
    (0, decorators_1.Get)('/')
], RootController.prototype, "getRoot", null);
__decorate([
    (0, decorators_1.Get)('/protected'),
    (0, decorators_1.Use)(requiredAuth)
], RootController.prototype, "getProtected", null);
RootController = __decorate([
    (0, decorators_1.Controller)()
], RootController);
