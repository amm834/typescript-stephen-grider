"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
const MetadataKeys_1 = require("./MetadataKeys");
// @author Aung Myat Moe - @amm834 - MIT license
function Controller(prefix) {
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
                const path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);
                const method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);
                const handler = value;
                const middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target, key) || [];
                if (path) {
                    router[method](`${prefix}${path}`, ...middlewares, handler);
                }
            }
        });
    };
}
exports.Controller = Controller;
