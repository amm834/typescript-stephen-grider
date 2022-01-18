"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
const MetadataKeys_1 = require("./MetadataKeys");
/**
 * @description - Handle the form validations
 * @param keys - Array of keys from form data
 * @return RequestHandler Middleware
 * */
function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).end('Invalid Request');
            return;
        }
        for (let key in req.body) {
            if (!req.body[key]) {
                res.status(422).end(`Missing property ${key}`);
                return;
            }
        }
        next();
    };
}
// @author Aung Myat Moe - @amm834 - MIT license
function Controller(prefix = '') {
    return function (target) {
        const router = AppRouter_1.AppRouter.getInstance();
        Reflect.ownKeys(target.prototype).forEach(key => {
            const descriptor = Reflect.getOwnPropertyDescriptor(target.prototype, key);
            if (descriptor) {
                const { value } = descriptor;
                if (!descriptor.configurable)
                    return;
                if (typeof value !== 'function')
                    return;
                if (value === target)
                    return;
                const handler = value;
                const path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);
                const method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);
                const middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype, key) || [];
                const requiredProps = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validator, target.prototype, key) || [];
                const validator = bodyValidators(requiredProps);
                if (path) {
                    router[method](`${prefix}${path}`, ...middlewares, validator, handler);
                }
            }
        });
    };
}
exports.Controller = Controller;
