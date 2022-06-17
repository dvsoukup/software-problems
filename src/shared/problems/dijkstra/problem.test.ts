import { Dijkstra, Graph } from "./problem";

describe("Dijkstra", () => {
  let sut: Dijkstra;

  beforeEach(() => {
    sut = new Dijkstra();
  });

  const getDataProvider: {
    input1: Graph;
    expected: boolean;
  }[] = [
    {
      input1: {
        start: { A: 5, B: 2 },
        A: { C: 4, D: 2 },
        B: { A: 8, D: 7 },
        C: { D: 6, finish: 3 },
        D: { finish: 1 },
        finish: {},
      },
      expected: true,
    },
  ];

  describe.each(getDataProvider)("temp", (provider) => {
    it(`Should get expected: ${provider.expected} for input1: ${provider.input1}`, () => {
      let actual = sut.run(provider.input1);
      expect([1]).toEqual(provider.expected);
    });
  });
});
