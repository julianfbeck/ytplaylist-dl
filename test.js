const expect = require("chai").expect;
const chai = require("chai");
const path = require("path");
const m = require(".");
const rimraf = require("rimraf");
const fs = require("fs");



describe("ytplaylist-dl", async function () {
    this.timeout(1000000);
    rimraf.sync("testfolder");
    fs.mkdirSync("testfolder");

    it("Downloading single file", async function () {
        let videos = await m("https://www.youtube.com/playlist?list=PLfpHPxe91z9NEwLMsxfmAehlZnoTzRFB8", "testfolder");
        expect(videos).to.be.an("array");
        let result = fs.readdirSync("testfolder");
        expect(result[0]).to.be.equal("Feelin29 Feat.KOJOE - 5lack.mp4")
    });
    rimraf.sync("testfolder");
});