# Wistia.js

[![downloadsBadge](https://img.shields.io/npm/dt/wistia.js?style=for-the-badge)](https://npmjs.com/wistia.js)
[![versionBadge](https://img.shields.io/npm/v/wistia.js?style=for-the-badge)](https://npmjs.com/wistia.js)

#### Includes

- Data API [Wistia data API docs](https://wistia.com/doc/data-api)
- Upload API [Wistia upload API docs](https://wistia.com/doc/upload-api)

## Installation
--------------------------------------

```bash
npm install wistia.js
```

## Usages
--------------------------------------

### Upload Video

```js
const Wistia = require('wistia.js');
const fs = require('fs');

let wistia = new Wistia('****************************************************************');

async function uploadVideo() {
    let data = await wistia.uploadVideo({
        file: fs.writeFileSync('test.mp4'),
        name: 'Test Video Uploaded With File'
    })
    console.log(data)
};
```

If you want to upload video with url, enter url key instead of file.

### Get Account Datas

```js
let account = await wistia.accountData();
console.log(account);

let stats = await wistia.accountStats();
console.log(stats);
```

### Get Media Datas

```js
let medias = await wistia.getMedias();
console.log(medias);

let media = await wistia.getMedia('********');
console.log(media); 
```

### Get Project Datas

```js
let projects = await wistia.getProjects();
console.log(projects);

let project = await wistia.getProject('********');
console.log(project);
```