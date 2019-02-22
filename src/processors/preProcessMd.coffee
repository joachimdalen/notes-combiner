through = require("through")
# Process markdown before it is rendered.
module.exports = preProcessMd = () ->
    through((data) ->
        pageBreak = '\n\n <div style="page-break-after:always"></div> \n\n'
        this.queue(data + pageBreak)
    )
