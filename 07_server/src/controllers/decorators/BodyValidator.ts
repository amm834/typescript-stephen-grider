import 'reflect-metadata'
import {MetadataKeys} from "./MetadataKeys";

export function BodyValidator(...keys: string[]) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
    }
}