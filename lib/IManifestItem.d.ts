export interface IManifestItem {
    /**
     * The starting byte position, or the byte offset
     */
    start: number;
    /**
     * The ending byte
     */
    end: number;
    /**
     * The mime type. Uses `mime-types`
     * to determine the mime type based on extension.
     * If not known, defaults to `"application/octet-stream"`
     */
    type: string;
}
