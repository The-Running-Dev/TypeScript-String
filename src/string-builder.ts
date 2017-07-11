import {String} from './string';

export class StringBuilder {
    public Values = [];

    constructor(value: string = String.Empty) {
        this.Values = new Array(value);
    }

    public ToString() {
        return this.Values.join('');
    }

    public Append(value: string) {
        this.Values.push(value);
    }

    public AppendFormat(value: string, ...args) {
        this.Values.push(String.Format(value, args));
    }

    public Clear() {
        this.Values = [];
    }
}