import { getState } from "./GetState";

export class State<T> implements ReadOnlyState<T> {
    private _value: T;

    public get value(): T {
        return this._value;
    }

    constructor(private persistKey: string, defaultValue: T) {
        this._value = getState<T>(persistKey, defaultValue);
    }

    public async updateValue(value: T): Promise<void> {
        this._value = value;
        Application.setState(value, this.persistKey);
    }
}

export interface ReadOnlyState<T> {
    get value(): T;
}