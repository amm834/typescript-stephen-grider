import 'reflect-metadata'

function routeBinder(method: string) {
    return function (path: string) {
        return function (target: Object, key: string, descriptor: PropertyDescriptor) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        }
    }
}

export const get = routeBinder('get')
export const post = routeBinder('post')
export const put = routeBinder('put')
export const path = routeBinder('path')
export const del = routeBinder('delete')