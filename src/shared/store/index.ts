import {User} from "../mini-db/users.ts";
import {makeAutoObservable} from "mobx";

export class TripStore {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this);
    }


}