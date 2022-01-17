import 'reflect-metadata'

export function get(path: string) {
    return function (target: Object, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata('path', path, target, key);
    }
}