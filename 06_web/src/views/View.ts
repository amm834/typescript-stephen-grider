import {Model} from "../models/Model";

export abstract class View<T extends Model<K>, K> {

    constructor(public parent: Element, public model: T) {
        this.bindModel()
    }

    bindModel(): void {
        this.model.on('change', () => {
            this.render()
        })
    }


    abstract eventsMap(): { [key: string]: () => void }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();
        for (const eventsMapKey in eventsMap) {
            const [eventName, selector] = eventsMapKey.split(':');
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventsMapKey])
            })

        }
    }

    abstract template(): string;

    render(): void {
        // Remove every html element before render
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content)
        this.parent.append(templateElement.content)
    }
}