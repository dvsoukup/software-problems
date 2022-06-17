import DivideTwoIntegers from "./problem";

describe("DivideTwoIntegers", () => {
  let utils: DivideTwoIntegers;

  beforeEach(() => {
    utils = new DivideTwoIntegers();
  });

  const getAddTwoNumbersDataProvider: {
    dividend: number;
    divisor: number;
    expected: number;
  }[] = [
    {
      dividend: 10,
      divisor: 3,
      expected: 3,
    },
    {
      dividend: 7,
      divisor: -3,
      expected: -2,
    },
    {
      dividend: 4,
      divisor: 8,
      expected: 0,
    },
    {
      dividend: -7,
      divisor: -3,
      expected: 2,
    },
    {
      dividend: Math.pow(-2, 31),
      divisor: Math.pow(2, 31) - 1,
      expected: -1,
    },
    // {
    //   dividend: Math.pow(2, 31),
    //   divisor: 2,
    //   expected: 1073741824,
    // },
  ];

  describe.each(getAddTwoNumbersDataProvider)(
    "DivideTwoIntegers",
    (provider) => {
      it(`Should get result of ${provider.expected} for dividend: ${provider.dividend} and divisor: ${provider.divisor}`, () => {
        let result = utils.divide(provider.dividend, provider.divisor);
        expect(result).toEqual(provider.expected);
      });
    }
  );
});
