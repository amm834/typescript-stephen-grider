import 'reflect-metadata'

@controller
class LoginController {
    color: string = 'red'

    @get('/login')
    login(): void {
        console.log('login method')
    }
}



function get(path: string) {
    return (target: LoginController, key: string): void => {
        Reflect.defineMetadata('path', path, target, key)
    }
}

function controller(target:typeof LoginController) {
    console.log(target.toString())
}
