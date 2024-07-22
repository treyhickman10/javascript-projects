const whoWon = require("../RPS.js");

describe("whoWon", function () {
  test("if rock beats scissors", function () {
    expect(whoWon("rock", "scissors")).toBe("Player 1 wins!");
  });
  test("if scissors losses to rock", function () {
    expect(whoWon("scissors", "rock")).toBe("Player 2 wins!");
  });
});
