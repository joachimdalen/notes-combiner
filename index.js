const markdownpdf = require("markdown-pdf");
const through = require("through");
const remkatex = require("remarkable-katex");
const fs = require("fs");
const path = require("path");

/**
 * Full path for output PDF file.
 */
const outputPath = "";

/**
 * Folder path for markdown files.
 */
const markdownFilesDir = "";

/**
 * Options passed to markdown-pdf.
 */
const generatorOptions = {
  paperFormat: "A4",
  preProcessMd: preProcessMd,
  cssPath: "./styles.css",
  remarkable: {
    html: true,
    plugins: [remkatex]
  }
};

/**
 * Check if a given file with the given filepath matches a markdown file.
 * @param {string} element
 */
function extension(element) {
  var extName = path.extname(element);
  return extName === ".md";
}

/**
 * Process markdown before it is rendered.
 */
function preProcessMd() {
  return through(function(data) {
    pageBreak = '\n\n <div style="page-break-after:always"></div> \n\n';
    this.queue(data + pageBreak);
  });
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
