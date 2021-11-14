var fn = require("./index.js");

describe("test number separator", () => {
  it("shouldReturn1If1", () => {
    expect(fn(1, " ")).toBe("1");
  });
  it("shouldReturn2If2", () => {
    expect(fn(2, " ")).toBe("2");
  });
  it("shouldReturn100If100", () => {
    expect(fn(100, " ")).toBe("100");
  });
  it("shouldReturn1 000If1000", () => {
    expect(fn(1000, " ")).toBe("1 000");
  });
  it("shouldReturn1 000 000If1000000", () => {
    expect(fn(1000000, " ")).toBe("1 000 000");
  });
  it("shouldReturn999 999 999If999999999", () => {
    expect(fn(999999999)).toBe("999 999 999");
  });
  it("shouldReturn999,999,999If999999999", () => {
    expect(fn(999999999, ",")).toBe("999,999,999");
  });
  it("shouldReturn1.1If1.1", () => {
    expect(fn(1.1)).toBe("1.1");
  });
  it("shouldReturn1.111If1.111", () => {
    expect(fn(1.111)).toBe("1.111");
  });
  it("shouldReturn1111.111If1 111.111", () => {
    expect(fn(1111.111)).toBe("1 111.111");
  });
  it("shouldReturn123 456.789If123456.789", () => {
    expect(fn(123456.789)).toBe("123 456.789");
  });
  it("1000.1234 to 1000.1234", () => {
    expect(fn(1000.1234, "", "")).toBe("1000.1234");
  });
  it("1000.1234 to 1 000.1234", () => {
    expect(fn(1000.1234, " ", "")).toBe("1 000.1234");
  });
  it("1000.1234 to 1000.1 234", () => {
    expect(fn(1000.1234, "", " ")).toBe("1000.1 234");
  });
  it("1000.1234 to 1 000.1 234", () => {
    expect(fn(1000.1234, " ", " ")).toBe("1 000.1 234");
  });
});
