import {User} from "../models/User";

export class UserForm {

    constructor(public parent: Element, public model: User) {
        this.bindModel()
    }

    bindModel(): void {
        this.model.on('change', () => {
            this.render()
        })
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick
        }

    }

    onSetNameClick = (): void => {
        const element = this.parent.querySelector('input')
        if (element) {
            const name = element.value;
            this.model.set({name})
        }
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge()
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
                <button class="set-name">Change Name</button>
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
        // Remove every html element before render
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content)
        this.parent.append(templateElement.content)
    }
}