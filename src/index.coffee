markdownpdf = require("markdown-pdf")
fs = require("fs")
path = require("path")
config = require('./config')

# Check if a given file with the given filepath matches a markdown file.
extension = (element) ->
  extName = path.extname(element)
  extName is ".md"


# Get all .md files from the given path.
getFilePaths = () ->
  fs.readdirSync(config.markdownFilesDir)
  .filter(extension).map((f) -> path.join(config.markdownFilesDir, f))

# Generate PDF file.
markdownpdf(config.generatorOptions)
  .concat.from(getFilePaths())
  .to(config.outputPath, () -> console.log("Created output file", config.outputPath))