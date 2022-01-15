import {View} from "./View";
import {User, UserProps} from "../models/User";

export class UserEdit extends View<User, UserProps> {
    template(): string {
        return (
            `
            <div>
                <div class="show-user"></div>
                <div class="show-form"></div>
            </div>
            `
        )
    }
}