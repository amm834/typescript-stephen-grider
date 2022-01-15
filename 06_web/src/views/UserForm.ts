import {User} from "../models/User";

export class UserForm {

    constructor(public parent: Element, public model: User) {
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick
        }

    }

    onSetAgeClick(): void {
        console.log('random agel')
    }

    onButtonClick(): void {
        console.log('button is clicking')
    }

    template(): string {
        return `
            <div>
                <h1>User Form </h1>
                <div>
                    <p>User name is ${this.model.get('name')}</p>
                    <p>User age is ${this.model.get('age')}</p>
                </div>
                <input />
                <button>Click Me</button>
                <button class="set-age">Set Random Age</button>
            </div>
        `
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();
        for (const eventsMapKey in eventsMap) {
            const [eventName, selector] = eventsMapKey.split(':');
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventsMapKey])
            })

        }
    }

    render(): void {
        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content)
        this.parent.append(templateElement.content)
    }
}