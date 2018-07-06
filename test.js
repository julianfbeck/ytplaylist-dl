const expect = require("chai").expect;
const chai = require("chai");
const path = require("path");
const m = require(".");
const rimraf = require("rimraf");
const fs = require("fs");



describe("ytplaylist-dl", async function () {
    this.timeout(100000);
    rimraf.sync("testfolder");
    fs.mkdirSync("testfolder");
    
    it("Downloading single file", async function () {
        await m("https://www.youtube.com/playlist?list=PLWKjhJtqVAbnZtkAI3BqcYxKnfWn_C704", "testfolder");
    });
});