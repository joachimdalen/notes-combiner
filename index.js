const markdownpdf = require("markdown-pdf");
const through = require("through");
const remkatex = require("remarkable-katex");
const fs = require("fs");
const path = require("path");

const outputPath = "";
const markdownFilesDir = "";
function extension(element) {
  var extName = path.extname(element);
  return extName === ".md";
}

function preProcessMd() {
  return through(function(data) {
    pageBreak = '\n\n <div style="page-break-after:always"></div> \n\n';
    this.queue(data + pageBreak);
  });
}
var mdDocs = fs
  .readdirSync(markdownFilesDir)
  .filter(extension)
  .map(f => {
    return path.join(markdownFilesDir, f);
  });

const options = {
  paperFormat: "A4",
  preProcessMd: preProcessMd,
  cssPath: "./styles.css",
  remarkable: {
    html: true,
    plugins: [remkatex]
  }
};

markdownpdf(options)
  .concat.from(mdDocs)
  .to(outputPath, function() {
    console.log("Created output file", outputPath);
  });
