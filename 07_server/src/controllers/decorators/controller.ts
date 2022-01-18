import 'reflect-metadata'
import {AppRouter} from "../../AppRouter";
import {Methods} from "./Methods";
import {MetadataKeys} from "./MetadataKeys";


// @author Aung Myat Moe - @amm834 - MIT license
export function Controller(prefix: string) {
    return function (target: Function) {

        const router = AppRouter.getInstance();

        Reflect.ownKeys(target.prototype).forEach(key => {
            const descriptor = Reflect.getOwnPropertyDescriptor(target.prototype, key);
            if (descriptor) {
                const {value} = descriptor;
                if (!descriptor.configurable) return;
                if (typeof value !== 'function') return;
                if (value === target) return;


                const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
                const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
                const handler = value;
                const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

                if (path) {
                    router[method](`${prefix}${path}`, ...middlewares, handler);
                }
            }
        })
    }
}