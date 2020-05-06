import { IDictionary } from "@totalpave/interfaces";

export abstract class WAPPlugin<TReadType = any, TOptions = IDictionary> {
    private _options: TOptions;

    public constructor(options?: TOptions) {
        this._options = options;
    }

    public getName(): string {
        return this.constructor.name;
    }
    
    protected async abstract _read(data: Uint8Array, type: string): Promise<TReadType>;

    public getOptions(): TOptions {
        return this._options;
    }

    public read(data: Uint8Array, type: string = 'application/octet-stream'): Promise<TReadType> {
        return this._read(data, type);
    }
}
