# notes-combiner

All my notes are written in Markdown using [Boostnote](https://boostnote.io/).
This script is used to take all markdown files in a directory, and combine them into a single PDF file.

### Usage

All you need to do is change two variables in `src/config.coffee`

- `outputPath` : Output path where PDF should be saved to. E.g. `./notes.pdf`
- `markdownFilesDir` : Folder containing markdown files to combine. E.g. `./notes`

Then run `npm run export`
