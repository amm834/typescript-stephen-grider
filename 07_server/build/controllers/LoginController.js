"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("./decorators");
const use_1 = require("./decorators/use");
function logger(req, res, next) {
    console.log('some how middleware is working');
    next();
}
let LoginController = class LoginController {
    getLogin(req, res) {
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
    `);
    }
};
__decorate([
    (0, decorators_1.Get)('/login'),
    (0, use_1.use)(logger),
    (0, use_1.use)(logger)
], LoginController.prototype, "getLogin", null);
LoginController = __decorate([
    (0, decorators_1.Controller)('/auth')
], LoginController);
