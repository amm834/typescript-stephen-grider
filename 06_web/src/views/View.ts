import {Model} from "../models/Model";

export abstract class View<T extends Model<K>, K> {
    regions: { [key: string]: Element } = {}

    constructor(public parent: Element, public model: T) {
        this.bindModel()
    }

    abstract template(): string;

    regionsMap(): { [key: string]: string } {
        return {}
    }

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

    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap()

        for (const key in regionsMap) {
            const selector = regionsMap[key]
            const element = fragment.querySelector(selector)
            if (element) {
                this.regions[key] = element;
            }
        }
    }

    render(): void {
        // Remove every html element before render
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template')
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content)
        this.mapRegions(templateElement.content)
        this.parent.append(templateElement.content)
    }
}