/**
 * Process markdown before it is rendered.
 */
module.exports = function preProcessMd() {
    return through(function (data) {
        pageBreak = '\n\n <div style="page-break-after:always"></div> \n\n';
        this.queue(data + pageBreak);
    });
}