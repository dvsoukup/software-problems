import SmallestContainer from "./problem";

describe("SmallestContainer", () => {
  let utils: SmallestContainer;

  beforeEach(() => {
    utils = new SmallestContainer();
  });

  const getSmallestContainerDataProvider: {
    days: number;
    boxes: Array<number>;
    expectedResult: number | null;
  }[] = [
    {
      days: 5,
      boxes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      expectedResult: 15,
    },
    {
      days: 2,
      boxes: [1, 2, 3],
      expectedResult: 3,
    },
    {
      days: 1,
      boxes: [1, 2, 3, 4, 5, 6],
      expectedResult: 21,
    },
    {
      days: 1,
      boxes: [1, 2, 3],
      expectedResult: 6,
    },
    {
      days: 0,
      boxes: [1, 2, 3, 4, 5, 6],
      expectedResult: null,
    },
    {
      days: 15,
      boxes: [1, 2, 3, 4, 5],
      expectedResult: 5,
    },
    {
      days: 15,
      boxes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      expectedResult: 18,
    },
    {
      days: 5,
      boxes: [1, 2, 3, 4, 10, 9, 8, 7, 6, 5],
      expectedResult: 15,
    },
    {
      days: 5,
      boxes: [2, 10, 3, 5, 9, 1, 8, 4, 7, 6],
      expectedResult: 15,
    },
  ];

  describe.each(getSmallestContainerDataProvider)(
    "getSmallestContainer",
    (provider) => {
      it(`Should get container size of ${provider.expectedResult} for ${provider.days} days and box count of ${provider.boxes.length}`, async () => {
        let result = utils.getSmallestContainer(provider.days, provider.boxes);
        expect(result).toEqual(provider.expectedResult);
      });
    }
  );
});
