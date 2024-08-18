import { sum } from "../sum"

test("Expected sum", () => {
    const result = sum(4,3);
    expect(result).toBe(7);
}) ;