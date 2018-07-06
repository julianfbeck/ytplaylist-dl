const ytdl = require("ytdl-core");
const ytlist = require("youtube-playlist");
const path = require("path");
const fs = require("fs");


/**
 * 
 * @param {String} url to playlist 
 * @param {String} outputPath where to save the videos 
 * @param {Object} options 
 */
module.exports = async (url, outputPath, options = {}) => {

    options = Object.assign({
        format: "mp4",
        quality: "highest"
    }, options);

    return new Promise(async (resolve, reject) => {

        try {
            let videos = [];
            let files = []

            //remove playlist id
            let parts = url.split("list=");
            if (parts.length == 1)
                videos = [url];
            else {
                let id = parts[1].split("&");
                let newUrl = "https://www.youtube.com/playlist?list=" + id[0];
                videos = await getPlaylist(newUrl);
            }

            for (let video of videos) {
                let title = await getVideoTitle(video);
                title = title.replace(/[/\\?%*:|"<>]/g, "-"); //make sure there are no illeagale characters
                let file = path.join(outputPath, title + "." + options.format);
                await downloadVideo(video, file, options.quality);
                files.push(path.normalize(file));
            };
            resolve(files);
        } catch (error) {
            reject(error);
        }

    });
}

/**
 * Downloads youtube video and saves them
 * @param {String} url of the youtube video
 * @param {String} dir where the video should be placed
 */
async function downloadVideo(url, dir, quality) {
    return new Promise((resolve, reject) => {
        ytdl(url, {
                quality: quality
            })
            .pipe(fs.createWriteStream(dir)).on("finish", () => {
                resolve(dir);
            });
    });
}


/**
 * Returns array of links if url is a playlist
 * @param {String} url of the youtube video 
 */
async function getPlaylist(url) {
    return new Promise((resolve, reject) => {
        ytlist(url, "url").then(res => {
            resolve(res.data.playlist);
        });
    });
}


/**
 * Gets the title of a video
 * @param {} url 
 */
async function getVideoTitle(url) {
    return new Promise((resolve, reject) => {
        ytdl.getInfo(url, (err, info) => {
            if (err) throw reject(err);
            resolve(info.title);
        })
    });
}