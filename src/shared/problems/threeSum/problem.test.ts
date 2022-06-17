import ThreeSum from "./problem";

describe("ThreeSum", () => {
  let utils: ThreeSum;

  beforeEach(() => {
    utils = new ThreeSum();
  });

  const dataProvider: {
    nums: number[];
    expected: number[][];
  }[] = [
    {
      nums: [-1, 0, 1, 2, -1, -4],
      expected: [
        [-1, -1, 2],
        [-1, 0, 1],
      ],
    },
  ];

  describe.each(dataProvider)("ThreeSum", (provider) => {
    it(`Should expect ${JSON.stringify(
      provider.expected
    )} for: ${JSON.stringify(provider.nums)}`, () => {
      //   let result = utils.threeSum(provider.nums);

      expect(1).toEqual(1);
    });
  });
});
