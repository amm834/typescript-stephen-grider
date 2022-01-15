import {View} from "./View";
import {User, UserProps} from "../models/User";

export class UserShow extends View<User, UserProps> {
    template(): string {
        return (
            `
            <h1>User Detail</h1>
            <p>User name: ${this.model.get('name')}</p>
            <p>User age: ${this.model.get('age')}</p>
            `
        );
    }

}