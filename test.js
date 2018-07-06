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

    it("Downloading playlist", async function () {
        let videos = await m("https://www.youtube.com/playlist?list=PLfpHPxe91z9NEwLMsxfmAehlZnoTzRFB8", "testfolder");
        expect(videos).to.be.an("array");
        let result = fs.readdirSync("testfolder");
        expect(result[0]).to.be.equal("Feelin29 Feat.KOJOE - 5lack.mp4")
        rimraf.sync("testfolder");
        fs.mkdirSync("testfolder");
    });

    it("Download without playlist", async function () {
        let videos = await m("https://www.youtube.com/watch?v=pRk9K1eB-JQ&", "testfolder");
        expect(videos).to.be.an("array");
        let result = fs.readdirSync("testfolder");
        expect(result[0]).to.be.equal("Feelin29 Feat.KOJOE - 5lack.mp4")
        rimraf.sync("testfolder");
        fs.mkdirSync("testfolder");
    });


    it("Downloading playlist with selecteded video", async function () {
        let videos = await m("https://www.youtube.com/watch?v=pRk9K1eB-JQ&list=PLfpHPxe91z9NEwLMsxfmAehlZnoTzRFB8&index=1", "testfolder");
        expect(videos).to.be.an("array");
        let result = fs.readdirSync("testfolder");
        expect(result[0]).to.be.equal("Feelin29 Feat.KOJOE - 5lack.mp4")
        rimraf.sync("testfolder");
    });
});