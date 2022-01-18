"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.path = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
const Methods_1 = require("./Methods");
function routeBinder(method) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.get);
exports.post = routeBinder(Methods_1.Methods.post);
exports.put = routeBinder(Methods_1.Methods.put);
exports.path = routeBinder(Methods_1.Methods.patch);
exports.del = routeBinder(Methods_1.Methods.delete);
