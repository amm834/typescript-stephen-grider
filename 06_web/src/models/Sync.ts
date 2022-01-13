import axios, {AxiosPromise} from "axios";
import {UserProps} from "./User";

export class Sync {
    constructor(public baseUrl: string) {
    }

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.baseUrl}/${id}`);
    }

    save(data: UserProps): AxiosPromise {
        const {id} = data;
        if (id) {
            return axios.put(`${this.baseUrl}/${id}`, data)
        } else {
            return axios.post(this.baseUrl, data)
        }
    }
}