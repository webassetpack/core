
/**
 * The byte position of the Major version integer. (Unsigned 16bit LE)
 */
export const BYTE_POS_VERSION_MAJOR: number = 0x0000;

/**
 * The byte position of the Minor version integer. (Unsigned 16bit LE)
 */
export const BYTE_POS_VERSION_MINOR: number = 0x0002;

/**
 * The byte position of the Patch version integer. (Unsigned 16bit LE)
 */
export const BYTE_POS_VERSION_PATCH: number = 0x0004;

/**
 * The byte position of the manifest byte length. (Unsigned 16bit LE)
 */
export const BYTE_POS_MANIFEST_LENGTH: number = 0x0006;

/**
 * The byte length of the header, before the manifest data starts.
 */
export const BYTE_HEADER_SIZE: number = 0x0008;
