// launchcode.test.js code:
const launchcode = require("../index.js");

describe("Testing launchcode", function () {
  it("should have a value of 'noprofit' for the key 'organization'", function () {
    expect(launchcode.organization).toBe("nonprofit");
  });
});
