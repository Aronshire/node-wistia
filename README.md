# node-wistia

[![downloadsBadge](https://img.shields.io/npm/dt/node-wistia?style=for-the-badge)](https://npmjs.com/node-wistia)
[![versionBadge](https://img.shields.io/npm/v/node-wistia?style=for-the-badge)](https://npmjs.com/node-wistia)

#### Includes

- Data API [Wistia data API docs](https://wistia.com/doc/data-api)
- Upload API [Wistia upload API docs](https://wistia.com/doc/upload-api)

## Installation

```bash
npm install node-wistia
```

## Usages

### Upload Video

#### With File
```js
const Wistia = require('node-wistia');
const fs = require('fs');

let wistia = new Wistia('****************************************************************');

async function uploadVideo() {
    let data = await wistia.uploadVideo({
        file: fs.writeFileSync('test.mp4'),
        name: 'Test Video Uploaded With File',
        project_id: "*********"
    })
    console.log(data)
};
```

#### With URL

```js
const Wistia = require('node-wistia');

let wistia = new Wistia('****************************************************************');

async function uploadVideo() {
    let data = await wistia.uploadVideo({
        url: 'https://www.website.com/test.mp4',
        name: 'Test Video Uploaded With File',
        project_id: "*********"
    })
    console.log(data)
};
```

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