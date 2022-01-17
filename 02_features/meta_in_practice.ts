import 'reflect-metadata'

// Dummy router
class Router {
    static get(path: string, handler: () => void) {
        handler()
    }
}

@controller('/auth')
class LoginController {

    @get('/login')
    login() {
        console.log('I am logged in.')
    }

    @get('/logout')
    logout() {
        console.log('some')
    }
}


function get(path: string) {
    return function (target: any, key: string) {
        Reflect.defineMetadata('path', path, target, key)
    }
}

// Implemented by Aung Myat Moe - @amm834 - MIT license
function controller(prefix: string) {
    return function (target: Function) {
        Reflect.ownKeys(target.prototype).forEach(key => {
            const descriptor = Reflect.getOwnPropertyDescriptor(target.prototype, key);
            if (descriptor) {
                const {value} = descriptor;
                if (!descriptor.configurable) return;
                if (typeof value !== 'function') return;
                if (value === target) return;

                const path = Reflect.getMetadata('path', target.prototype, key)
                const handler: () => void = value
                Router.get(`${prefix}${path}`, handler)
            }
        })
    }
}

