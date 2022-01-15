import {AxiosError, AxiosPromise, AxiosResponse} from "axios";

interface Sync<T> {
    fetch(id: number): AxiosPromise;

    save(data: T): AxiosPromise;
}

interface ModelAttributes<T> {
    set(value: T): void;

    getAll(): T;

    get<K extends keyof T>(key: K): T[K];
}

interface Events {
    on(eventName: string, callback: () => void);

    trigger(eventName: string): void;
}

interface HasId {
    id?: number;
}

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private sync: Sync<T>,
        private events: Events
    ) {
    }
    
    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.get('id');

        if (typeof id !== 'number') {
            throw  new Error('Cannot fetch because of not having an id');
        }

        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data);
        })
    }

    save(): void {
        this.sync.save(this.attributes.getAll()).then((response: AxiosResponse): void => {
            this.attributes.set(response.data);
            this.trigger('save')
        })
            .catch((error: AxiosError): void => {
                this.trigger('error')
                console.log(error)
            })
    }
}