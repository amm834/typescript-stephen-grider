import {View} from "./View";
import {User, UserProps} from "../models/User";

export class UserForm extends View<User, UserProps> {


    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-user': this.onSaveUserClick
        }
    }

    onSaveUserClick = (): void => {
        this.model.save();
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
        return (
            `
            <div>
                <input placeholder="Enter Username"/>
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-user">Save</button>
            </div>
        `
        )
    }


}