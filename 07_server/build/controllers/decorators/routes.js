"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Path = exports.Put = exports.Post = exports.Get = void 0;
require("reflect-metadata");
const Methods_1 = require("./Methods");
const MetadataKeys_1 = require("./MetadataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.Get = routeBinder(Methods_1.Methods.get);
exports.Post = routeBinder(Methods_1.Methods.post);
exports.Put = routeBinder(Methods_1.Methods.put);
exports.Path = routeBinder(Methods_1.Methods.patch);
exports.Delete = routeBinder(Methods_1.Methods.delete);
