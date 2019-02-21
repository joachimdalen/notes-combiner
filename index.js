const markdownpdf = require("markdown-pdf");
const through = require("through");
const fs = require("fs");
const path = require("path");

/**
 * Check if a given file with the given filepath matches a markdown file.
 * @param {string} element
 */
function extension(element) {
  var extName = path.extname(element);
  return extName === ".md";
}

/**
 * Get all .md files from the given path.
 */
function getFilePaths() {
  return fs
    .readdirSync(markdownFilesDir)
    .filter(extension)
    .map(f => {
      return path.join(markdownFilesDir, f);
    });
}

/**
 * Generate PDF file.
 */
markdownpdf(generatorOptions)
  .concat.from(getFilePaths())
  .to(outputPath, function() {
    console.log("Created output file", outputPath);
  });
