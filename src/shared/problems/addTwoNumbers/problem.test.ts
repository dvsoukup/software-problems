import AddTwoNumbers from "./problem";

describe("AddTwoNumbers", () => {
  let utils: AddTwoNumbers;

  beforeEach(() => {
    utils = new AddTwoNumbers();
  });

  const getAddTwoNumbersDataProvider: {
    list1: Array<number>;
    list2: Array<number>;
    expectedResult: Array<number>;
  }[] = [
    {
      list1: [2, 4, 3],
      list2: [5, 6, 4],
      expectedResult: [7, 0, 8],
    },
    {
      list1: [0],
      list2: [0],
      expectedResult: [0],
    },
    {
      list1: [9, 9, 9, 9, 9, 9, 9],
      list2: [9, 9, 9, 9],
      expectedResult: [8, 9, 9, 9, 0, 0, 0, 1],
    },
    {
      list1: [
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ],
      list2: [5, 6, 4],
      expectedResult: [
        6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ],
    },
    {
      list1: [5, 6, 4],
      list2: [
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ],
      expectedResult: [
        6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 1,
      ],
    },
  ];

  describe.each(getAddTwoNumbersDataProvider)("addTwoNumbers", (provider) => {
    it(`Should get sum of ${provider.expectedResult} for list1: ${provider.list1} and list2: ${provider.list2}`, () => {
      let l1 = utils.arrayToLinkedList(provider.list1);
      let l2 = utils.arrayToLinkedList(provider.list2);

      // console.log(l1);
      let result = utils.addTwoNumbers(l1, l2);
      let expectedLL = utils.arrayToLinkedList(provider.expectedResult);
      expect(result).toEqual(expectedLL);
    });
  });
});
