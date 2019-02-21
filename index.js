const markdownpdf = require("markdown-pdf");
const fs = require("fs");
const path = require("path");
const config = require('./config');

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
    .readdirSync(config.markdownFilesDir)
    .filter(extension)
    .map(f => {
      return path.join(config.markdownFilesDir, f);
    });
}

/**
 * Generate PDF file.
 */
markdownpdf(config.generatorOptions)
  .concat.from(getFilePaths())
  .to(config.outputPath, function () {
    console.log("Created output file", config.outputPath);
  });