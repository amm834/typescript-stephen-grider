"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
// @author Aung Myat Moe - @amm834 - MIT license
function controller(prefix) {
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
                const path = Reflect.getMetadata('path', target.prototype, key);
                const handler = value;
                router.get(`${prefix}${path}`, handler);
            }
        });
    };
}
exports.controller = controller;
