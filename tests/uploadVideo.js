const Wistia = require('../index');
const fs = require('fs');
let wistia = new Wistia('****************************************************************');


async function withFile() {
    let data = await wistia.uploadVideo({
        file: fs.writeFileSync('test.mp4'),
        name: 'Test Video Uploaded With File',
        project_id: "*********"
    })
    console.log(data)
}

async function withUrl() {
    let data = await wistia.uploadVideo({
        url: 'https://www.website.com/test.mp4',
        name: 'Test Video Uploaded With URL',
        project_id: "*********"
    })
    console.log(data)
}

withFile();
withUrl();