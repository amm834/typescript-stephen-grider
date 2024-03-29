import 'reflect-metadata'

import {MetadataKeys} from "./MetadataKeys";
import {RequestHandler} from "express";

export function Use(middleware: RequestHandler) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];
        Reflect.defineMetadata(
            MetadataKeys.middleware,
            [...middlewares, middleware],
            target, key);
    }
}