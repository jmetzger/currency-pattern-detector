"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Doji_1 = __importDefault(require("../common/Doji"));
const checker_1 = require("../../checker");
exports.default = (candles) => {
    const first = candles[candles.length - 3];
    const second = candles[candles.length - 2];
    const third = candles[candles.length - 1];
    const firstMidpoint = (first.open + first.close) / 2;
    const isFirstBullish = checker_1.is(first, { trend: "UP" });
    const dojiExists = Doji_1.default([second]);
    const isThirdBearish = checker_1.is(third, { trend: "DOWN" });
    const gapExists = second.high > first.high &&
        second.low > first.high &&
        third.open < second.low &&
        second.close > third.open;
    const doesCloseBelowFirstMidpoint = third.close < firstMidpoint;
    return (isFirstBullish &&
        dojiExists &&
        gapExists &&
        isThirdBearish &&
        doesCloseBelowFirstMidpoint);
};
//# sourceMappingURL=EveningDojiStar.js.map