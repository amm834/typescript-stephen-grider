export class UserForm {

    constructor(public parent: Element) {
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:button': this.onButtonClick,
            'mouseover:h1':this.hoverMe
        }

    }

    hoverMe():void {
        console.log('hovering h1')
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

    onButtonClick(): void {
        console.log('button is clicking')
    }

    template(): string {
        return `
            <div>
                <h1>User Form </h1>
                <input />
                <button>Click Me</button>
            </div>
        `
    }

    render(): void {
        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content)
        this.parent.append(templateElement.content)
    }
}