import { Base64 } from "https://deno.land/x/bb64@1.1.0/mod.ts";
import ollama from "npm:ollama";

export async function getkeywords(image: string): Promise<string[]> {
  const body = {
    "model": "llava:13b",
    "format": "json",
    "prompt": `Describe the image as a collection of keywords. Output in JSON format. Use the following schema: { filename: string, keywords: string[] }`,
    "images": [image],
    "stream": false
  };

  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.status !== 200) {
    console.log(`Error: ${response.status}: ${response.statusText}`);
    return [];
  } else {
    const json = await response.json();
    const keywords = JSON.parse(json.response);
    return keywords?.keywords || [];
  }

}

export function createFileName(keywords: string[], fileext: string): string {
  let newfilename = "";
  if (keywords.length > 0) {
    const fileparts = keywords.map(k => k.replace(/ /g, "_"));
    let cl = 0
    const filteredWords = fileparts.filter(w => {
      cl = cl + w.length + 1;
      return cl <= 230
    })
    newfilename = filteredWords.join("-") + "." + fileext;
  }
  return newfilename;
}


if (import.meta.main) {
await ollama.pull({model: "llava:13b"});
const currentpath = Deno.cwd();
for (const file of Deno.readDirSync(".")) {
  if (file.name.endsWith(".jpg") || file.name.endsWith(".jpeg") || file.name.endsWith(".png")) {

    const b64 = Base64.fromFile(`${currentpath}/${file.name}`).toString();
    Base64
    const keywords = await getkeywords(b64);
    const newfilename = createFileName(keywords, file.name.split(".").pop()!);
    Deno.copyFileSync(`${currentpath}/${file.name}`, `${currentpath}/${newfilename}`);

    console.log(`Copied ${file.name} to ${newfilename}`);
  } else {
    console.log(`Skipping ${file.name}`);
  }
}
}

