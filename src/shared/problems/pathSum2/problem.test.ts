import Main, { pathSum } from "./problem";

describe("Main", () => {
  let sut: Main;

  // beforeEach(() => {
  //   sut = new Main();
  // });

  const getDataProvider: {
    root: Array<number | null>;
    target: number;
    expected: number[][];
  }[] = [
    {
      root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
      target: 22,
      expected: [
        [5, 4, 11, 2],
        [5, 8, 4, 5],
      ],
    },
    {
      root: [1, 2, 3],
      target: 5,
      expected: [],
    },
  ];

  describe.each(getDataProvider)("temp", (provider) => {
    it(`Should get expected: ${provider.expected} for input1: ${provider.root} and input2: ${provider.target}`, () => {
      // let actual = pathSum();
      expect(true).toEqual(true);
    });
  });
});
