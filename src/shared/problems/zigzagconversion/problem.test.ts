import Temp from "./problem";

describe("Temp", () => {
  let sut: Temp;

  beforeEach(() => {
    sut = new Temp();
  });

  const getDataProvider: {
    input1: Array<number>;
    input2: Array<number>;
    expected: Array<number>;
  }[] = [
    {
      input1: [2, 4, 3],
      input2: [5, 6, 4],
      expected: [1],
    },
    {
      input1: [0],
      input2: [0],
      expected: [1],
    },
  ];

  describe.each(getDataProvider)("temp", (provider) => {
    it(`Should get expected: ${provider.expected} for input1: ${provider.input1} and input2: ${provider.input2}`, () => {
      let actual = sut.temp<number>();
      expect([1]).toEqual(provider.expected);
    });
  });
});
