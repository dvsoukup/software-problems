import MinPathSum, { minPathSum } from "./problem";

describe("MinPathSum", () => {
  let sut: MinPathSum;

  // beforeEach(() => {
  //   sut = new MinPathSum();
  // });

  const getDataProvider: {
    input1: number[][];
    expected: number;
  }[] = [
    {
      input1: [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ],
      expected: 7,
    },
    // {
    //   input1: [
    //     [1, 2, 3],
    //     [4, 5, 6],
    //   ],
    //   expected: 12,
    // },
    // {
    //   input1: [[], []],
    //   expected: 0,
    // },
    // {
    //   input1: [],
    //   expected: 0,
    // },
  ];

  describe.each(getDataProvider)("temp", (provider) => {
    it(`Should get expected: ${provider.expected} for input1: ${JSON.stringify(
      provider.input1
    )}`, () => {
      let actual = minPathSum(provider.input1);
      expect(actual).toEqual(provider.expected);
    });
  });
});
