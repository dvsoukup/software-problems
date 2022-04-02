// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   setupFiles: ["dotenv/config"],
// };
module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  // testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["/dist/", "/node_modules/"],
};
