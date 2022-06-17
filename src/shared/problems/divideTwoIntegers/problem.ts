export default class DivideTwoIntegers {
  divide(dividend: number, divisor: number): number {
    let found = false;
    let curVal = Math.abs(dividend);
    let curDivisor = Math.abs(divisor);
    let quotient = 0;
    let negativeFlag =
      (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? "" : "-";

    while (!found) {
      curVal = curVal - curDivisor;
      if (curVal < 0) {
        found = true;
      } else {
        quotient++;
      }
      //loop killer
      if (quotient > 10000000000) {
        console.log("Loop killed!");
        found = true;
      }
    }
    return parseInt(`${negativeFlag}${quotient}`);
  }
}
