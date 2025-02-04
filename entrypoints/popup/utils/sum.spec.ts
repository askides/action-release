import { sum } from "./sum";
import { describe, it, expect } from "vitest";

describe("sum", () => {
  it("should sum two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
