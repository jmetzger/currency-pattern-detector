import "jasmine";
import GraveStoneDoji from "../../../patterns/common/GraveStoneDoji";
import { ICandle } from "../../../types";

describe("GraveStoneDoji (common)", () => {
  it("default", () => {
    const trueInput: ICandle[] = [
      { open: 30.1, high: 36.13, close: 30.13, low: 30.12 }
    ];

    expect(GraveStoneDoji(trueInput)).toBeTrue();
  });
});
