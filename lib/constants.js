"use strict";
exports.__esModule = true;
/**
 * The byte position of the Major version integer. (Unsigned 16bit LE)
 */
exports.BYTE_POS_VERSION_MAJOR = 0x0000;
/**
 * The byte position of the Minor version integer. (Unsigned 16bit LE)
 */
exports.BYTE_POS_VERSION_MINOR = 0x0002;
/**
 * The byte position of the Patch version integer. (Unsigned 16bit LE)
 */
exports.BYTE_POS_VERSION_PATCH = 0x0004;
/**
 * The byte position of the manifest byte length. (Unsigned 16bit LE)
 */
exports.BYTE_POS_MANIFEST_LENGTH = 0x0006;
/**
 * The byte length of the header, before the manifest data starts.
 */
exports.BYTE_HEADER_SIZE = 0x0008;
//# sourceMappingURL=constants.js.map