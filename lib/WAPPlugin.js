"use strict";
exports.__esModule = true;
var WAPPlugin = /** @class */ (function () {
    function WAPPlugin(options) {
        this._options = options;
    }
    WAPPlugin.prototype.getName = function () {
        return this.constructor.name;
    };
    WAPPlugin.prototype.getOptions = function () {
        return this._options;
    };
    WAPPlugin.prototype.read = function (data) {
        return this._read(data);
    };
    return WAPPlugin;
}());
exports.WAPPlugin = WAPPlugin;
//# sourceMappingURL=WAPPlugin.js.map