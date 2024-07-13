const checkFive = require("../checkFive.js");

describe("checkFive", function () {
  test('should return "is less than five"', function () {
    let output = checkFive(3);
    expect(output).toBe("3 is less than 5.");
  });
});
