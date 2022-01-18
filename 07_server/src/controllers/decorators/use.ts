import {MetadataKeys} from "./MetadataKeys";

export function use(middleware: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];
        Reflect.defineMetadata(
            MetadataKeys.middleware,
            [...middlewares, middleware],
            target, key);
    }
}