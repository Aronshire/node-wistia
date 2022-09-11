const Wistia = require('../index');

let wistia = new Wistia('****************************************************************');

async function main() {
    let account = await wistia.accountData();
    console.log(account);

    let stats = await wistia.accountStats();
    console.log(stats);

    let medias = await wistia.getMedias();
    console.log(medias);

    let media = await wistia.getMedia('********');
    console.log(media);

    let projects = await wistia.getProjects();
    console.log(projects);

    let project = await wistia.getProject('********');
    console.log(project);
}

main();