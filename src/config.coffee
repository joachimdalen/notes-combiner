remkatex = require("remarkable-katex")
preProcessMd = require("./processors/preProcessMd")
module.exports = {
    # Folder path for markdown files.
    markdownFilesDir: "",
    # Full path for output PDF file.
    outputPath: "",
    #Options passed to markdown-pdf.
    generatorOptions: {
        paperFormat: "A4",
        preProcessMd: preProcessMd,
        cssPath: "./styles.css",
        remarkable: {
            html: true,
            plugins: [remkatex]
        }
    }
}