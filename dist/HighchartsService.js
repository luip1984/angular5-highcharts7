"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HighchartsStatic = (function () {
    function HighchartsStatic() {
    }
    HighchartsStatic.decorators = [
        { type: core_1.Injectable },
    ];
    return HighchartsStatic;
}());
exports.HighchartsStatic = HighchartsStatic;
var HighchartsService = (function () {
    function HighchartsService(highchartsStatic) {
        this._highchartsStatice = highchartsStatic;
    }
    HighchartsService.prototype.getHighchartsStatic = function () {
        return this._highchartsStatice;
    };
    HighchartsService.decorators = [
        { type: core_1.Injectable },
    ];
    HighchartsService.ctorParameters = function () { return [
        { type: HighchartsStatic, },
    ]; };
    return HighchartsService;
}());
exports.HighchartsService = HighchartsService;
//# sourceMappingURL=HighchartsService.js.map