import { getState } from "./GetState";

export class State<T> implements ReadOnlyState<T> {
    public get value(): T {
        return getState<T>(this.persistKey, this.defaultValue);
    }

    constructor(private persistKey: string, private defaultValue: T) {
    }

    public updateValue(value: T) {
        Application.setState(value, this.persistKey);
    }
}

export interface ReadOnlyState<T> {
    get value(): T;
}