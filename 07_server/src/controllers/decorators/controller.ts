import 'reflect-metadata'
import {AppRouter} from "../../AppRouter";


// @author Aung Myat Moe - @amm834 - MIT license
export function controller(prefix: string) {
    return function (target: Function) {

        const router = AppRouter.getInstance();

        Reflect.ownKeys(target.prototype).forEach(key => {
            const descriptor = Reflect.getOwnPropertyDescriptor(target.prototype, key);
            if (descriptor) {
                const {value} = descriptor;
                if (!descriptor.configurable) return;
                if (typeof value !== 'function') return;
                if (value === target) return;


                const path = Reflect.getMetadata('path', target.prototype, key);
                const handler: () => void = value;
                router.get(`${prefix}${path}`, handler);
            }
        })
    }
}