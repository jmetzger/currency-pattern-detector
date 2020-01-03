import { ICandle } from "../../types";
import Doji from "../common/Doji";

export default (candles: ICandle[]): boolean => {
  const first = candles[candles.length - 3];
  const second = candles[candles.length - 2];
  const third = candles[candles.length - 1];

  const firstMidpoint = (first.open + first.close) / 2;
  const isFirstBullish = first.close > first.open;
  const dojiExists = Doji([
    {
      open: second.open,
      close: second.close,
      high: second.high,
      low: second.low
    }
  ]);
  const isThirdBearish = third.open > third.close;
  const gapExists =
    second.high > first.high &&
    second.low > first.high &&
    third.open < second.low &&
    second.close > third.open;
  const doesCloseBelowFirstMidpoint = third.close < firstMidpoint;

  return (
    isFirstBullish &&
    dojiExists &&
    gapExists &&
    isThirdBearish &&
    doesCloseBelowFirstMidpoint
  );
};
