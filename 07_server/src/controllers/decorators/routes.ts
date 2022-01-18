import 'reflect-metadata'
import {Methods} from "./Methods";

function routeBinder(method: string) {
    return function (path: string) {
        return function (target: Object, key: string) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        }
    }
}

export const get = routeBinder(Methods.get)
export const post = routeBinder(Methods.post)
export const put = routeBinder(Methods.put)
export const path = routeBinder(Methods.patch)
export const del = routeBinder(Methods.delete)