# ytplaylist-dl 

> download entire YouTube playlists at once


## Install

```
$ npm install ytplaylist-dl
```


## Usage
```js
const ytpdl = require('ytplaylist-dl');

(async () => {
    await ytpdl("https://www.youtube.com/playlist?list=PLfpHPxe91z9NEwLMsxfmAehlZnoTzRFB8", "Desktop",{format:"mp4"});

    let videos = await ytpdl("YouTube url....", "Desktop");
    //videos = [ "Desktop/Video1" , "Desktop/Video2", .....]
})();
```


## API

### ytpdl(url, output, [options])

Downloads all videos from the playlist and saves them under the output Path.
Returns a `Promise` with a path to all downloaded videos.


#### url

Type: `string`

Url to the YouTube Playlist. If the provided video is a normal YouTube video, the single video will be downloaded. Plalist urls can be
- https://www.youtube.com/playlist?list=PLfpHPxe91z9NEwLMsxfmAehlZnoTzRFB8
- https://www.youtube.com/watch?v=pRk9K1eB-JQ&list=PLfpHPxe91z9NEwLMsxfmAehlZnoTzRFB8&
- https://www.youtube.com/watch?v=pRk9K1eB-JQ&list=PLfpHPxe91z9NEwLMsxfmAehlZnoTzRFB8&index=1
- single videos can also be downloaded: https://www.youtube.com/watch?v=pRk9K1eB-JQ& 

#### output

Type: `string`

Where to save the videos.

#### options

Type: `Object`

```
{
    format:"mp4"
    quality:"highest"
}
```
- **format** The video format of the downloaded Videos.
- **quality** The quality of the video see [ytdl-core quality](https://github.com/fent/node-ytdl-core#ytdlurl-options).


## Related

- [ytdl-core](https://github.com/fent/node-ytdl-core) - Youtube downloader in javascript.
- [youtube-playlist](https://github.com/CodeDotJS/youtube-playlist) -Extract links, ids, and names from a youtube playlist



## License

MIT © [Julian Beck](https://github.com/jufabeck2202)