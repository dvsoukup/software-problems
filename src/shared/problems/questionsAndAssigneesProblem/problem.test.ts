import Google, { QuestionsVolunteers, AssignedQuestion } from "./problem";

describe("Temp", () => {
  let sut: Google;

  beforeEach(() => {
    sut = new Google();
  });

  const getDataProvider: {
    input: QuestionsVolunteers;
    expected: AssignedQuestion[];
  }[] = [
    {
      input: {
        questions: [
          { id: 0, name: "foo", tags: ["python", "ai"] },
          { id: 1, name: "bar", tags: ["networking", "javascript"] },
          { id: 2, name: "baz", tags: ["networking", "math"] },
          { id: 3, name: "qwx", tags: ["networking", "ai"] },
          { id: 4, name: "zol", tags: ["c++", "php"] },
        ],
        volunteers: [{ id: "abc", tags: ["networking", "ai"] }],
      },
      expected: [{ questionId: 1, volunteer: "foo" }],
    },
  ];

  describe.each(getDataProvider)("temp", (provider) => {
    it(`Should get expected: ${provider.expected} for input1: ${provider.input}`, () => {
      let result = sut.getVolunteers(provider.input);
      expect([1]).toEqual(provider.expected);
    });
  });
});
