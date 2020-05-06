import { IDictionary } from "@totalpave/interfaces";
export declare abstract class WAPPlugin<TReadType = any, TOptions = IDictionary> {
    private _options;
    constructor(options?: TOptions);
    getName(): string;
    protected abstract _read(data: Uint8Array, type: string): Promise<TReadType>;
    getOptions(): TOptions;
    read(data: Uint8Array, type?: string): Promise<TReadType>;
}
