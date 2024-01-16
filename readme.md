# AI Image File Renamer

[![let the ai rename your images](https://img.youtube.com/vi/W4Bn73JHPZs/0.jpg)](https://www.youtube.com/watch?v=W4Bn73JHPZs)


A simple executable that renames image files based on keywords that describe the image. The keywords are generated using [Ollama.ai](https://ollama.ai). You must have Ollama installed first.

## Installation

1. Find the latest release for your OS [here](https://github.com/technovangelist/obm/releases/latest/)
2. Rename it to something memorable, like airenamer (or airenamer.exe on Windows).
3. Ensure it is executable. On Linux or Mac, run `chmod +x airenamer`.
4. Move the file somewhere into your path.
5. Again, make sure you have [Ollama.ai](https://ollama.ai) installed.

## Usage

Navigate to a folder with some images in it and run `airenamer`.

Make sure you have a backup first. It only copies the files, but I'm not responsible for any data loss.

## Environment Variables

You can override the default Ollama API endpoint address and model using following environment variables.  
This is useful when you have Ollama running on remote host and you want to use different model.

| Variable               | Description                                                                                            | Example Value                          | Default Value              |
|------------------------|-----------------------------------------------------------------------------------------------|--------------------------------------|---------------------------|
| `OLLAMA_BASE_URL`      | The base URL of the Ollama API that application connecting to.                           | `http://your-ollama-server-url:12345`               | `http://localhost:11434`          |
| `OLLAMA_MODEL`         | The model that application is going to use for filename generation.                                | `bakllava:13b`                           | `llava:13b`          |
