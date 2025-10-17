import { NoMojibake } from "../src/NoMojibake";

test("環境依存の漢字を変換", () => {
  const result = NoMojibake.encode("髙橋");
  expect(result).toBe("高橋");
});

test("環境依存の数字を変換", () => {
  const result = NoMojibake.encode("①Ⅱ3⃣⁴₅⒍");
  expect(result).toBe("(1)II[3]456.");
});
test("環境依存の漢数字を変換", () => {
  const result = NoMojibake.encode("㊆㈧");
  expect(result).toBe("(七)(八)");
});

test("環境依存の単位を変換", () => {
  const result = NoMojibake.encode("㎝㎏㍉㍍");
  expect(result).toBe("cmkgミリメートル");
});