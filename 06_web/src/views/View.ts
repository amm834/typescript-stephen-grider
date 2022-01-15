import {Model} from "../models/Model";

export abstract class View<T extends Model<K>, K> {

    constructor(public parent: Element, public model: T) {
        this.bindModel()
    }

    abstract template(): string;

    eventsMap(): { [key: string]: () => void } {
        return {};
    }


    bindModel(): void {
        this.model.on('change', () => {
            this.render()
        })
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