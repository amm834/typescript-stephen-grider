import {View} from "./View";
import {User, UserProps} from "../models/User";

export class UserForm extends View<User, UserProps> {


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


}