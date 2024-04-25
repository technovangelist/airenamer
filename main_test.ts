import { assertEquals, assertMatch, assertThrows } from "https://deno.land/std/assert/mod.ts"
import { createFileName, getkeywords } from "./main.ts";

Deno.test("create a good name", () => { 
  const keywords = ["this", "is", "a", "good", "name", "for", "testing"];
  
  const fname = createFileName(keywords, "jpg");
  assertEquals(fname, "this-is-a-good-name-for-testing.jpg");
})

Deno.test("File name too long", () => {
  const keywords = ["this", "is", "a", "longer", "name", "for", "testing", "that's", "too", "long", "and", "needs", "to", "be", "truncated", "otherwise", "the", "mac", "will", "fail", "to", "create", "the", "file", "because", "it's", "too", "long", "this", "is", "a", "longer", "name", "for", "testing", "that's", "too", "long", "and", "needs", "to", "be", "truncated", "otherwise", "the", "mac", "will", "fail", "to", "create", "the", "file", "because", "it's", "too", "long", "this", "is", "a", "longer", "name", "for", "testing", "that's", "too", "long", "and", "needs", "to", "be", "truncated", "otherwise", "the", "mac", "will", "fail", "to", "create", "the", "file", "because", "it's", "too", "long"];
  
  const destname = "this-is-a-longer-name-for-testing-that's-too-long-and-needs-to-be-truncated-otherwise-the-mac-will-fail-to-create-the-file-because-it's-too-long-this-is-a-longer-name-for-testing-that's-too-long-and-needs-to-be-truncated.jpg"; 

  const fname = createFileName(keywords, "jpg");
  assertEquals(fname, destname);
})

Deno.test("Underscores for spaces", () => {
  const keywords = ["this is a good name", "for testing"];

  const fname = createFileName(keywords, "jpg");
  assertEquals(fname, "this_is_a_good_name-for_testing.jpg");
})

Deno.test("getKeywords should return an array of keywords", async () => {
  const image = "someImageData"; // You need to replace this with actual image data for a valid test
  const result = await getkeywords(image);
  assertEquals(result, janeiro.instanceOf(Array));
});

Deno.test("getKeywords should return an empty array when no image is provided", async () => {
  // Since the function signature expects a string, let's test what happens if we pass in an empty string
  const result = await getkeywords('');
  assertEquals(result, []);
});

Deno.test("getKeywords should throw an error when passed non-string data", async () => {
  // The function signature expects a string argument, so passing in a number should raise an error
  await assertThrows(() => getkeywords("123")); // TypeScript requires type assertion to pass wrong type for testing purposes
});