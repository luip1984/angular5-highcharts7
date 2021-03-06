"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var opts;
var ChartEventEmitter = (function () {
    function ChartEventEmitter() {
    }
    ChartEventEmitter.emitChartEvent = function (eventName) {
        opts.chart.events[eventName]();
    };
    ChartEventEmitter.emitSeriesEvent = function (eventName) {
        opts.plotOptions.series.events[eventName]();
    };
    ChartEventEmitter.emitPointEvent = function (eventName) {
        opts.plotOptions.series.point.events[eventName]();
    };
    ChartEventEmitter.emitXAxisEvent = function (eventName) {
        opts.xAxis.events[eventName]();
    };
    ChartEventEmitter.emitYAxisEvent = function (eventName) {
        opts.yAxis.events[eventName]();
    };
    return ChartEventEmitter;
}());
exports.ChartEventEmitter = ChartEventEmitter;
var HighchartsChartObjectMock = (function () {
    function HighchartsChartObjectMock(_opts) {
        opts = _opts;
    }
    return HighchartsChartObjectMock;
}());
exports.HighchartsChartObjectMock = HighchartsChartObjectMock;
var highchartsStatic = {
    Chart: HighchartsChartObjectMock,
    StockChart: HighchartsChartObjectMock
};
var HighchartsServiceMock = (function () {
    function HighchartsServiceMock() {
    }
    HighchartsServiceMock.prototype.getHighchartsStatic = function () {
        return highchartsStatic;
    };
    HighchartsServiceMock.decorators = [
        { type: core_1.Injectable },
    ];
    return HighchartsServiceMock;
}());
exports.HighchartsServiceMock = HighchartsServiceMock;
//# sourceMappingURL=Mocks.js.map