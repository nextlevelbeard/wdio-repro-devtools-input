const path = require("path");
const expect = require("chai").expect;

describe('webdriver.io', () => {
    it('should upload sucessfully', () => {
        const filename = "sample.txt";
        browser.url('http://the-internet.herokuapp.com/upload');
        const input =  $('#file-upload');
        input.addValue(path.resolve(filename));
        expect(input.getValue()).to.include(filename);
        $("#file-submit").click();
        expect($("#uploaded-files").getText()).to.include(filename)
    })
});