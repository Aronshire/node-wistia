const sendRequest = require('./sendRequest');

/**
 * @Module node-wistia
 * @description A Node.js wrapper for the Wistia API.
 * @author Aronshire
 * @version 1.0.1
 * @license MIT
 */

class Wistia {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async uploadVideo(options) {

        let data = await sendRequest(this.apiKey, {
            type: 'upload',
            method: 'POST',
            formData: {
                ...options,
            }
        })

        return data;
    }

    async accountData() {

        let data = await sendRequest(this.apiKey, {
            type: 'data',
            method: 'GET',
            data: 'account'
        })

        return data;
    }

    async accountStats() {

        let data = await sendRequest(this.apiKey, {
            type: 'data',
            method: 'GET',
            data: 'stats/account'
        })

        return data;
    }

    async getMedias() {

        let data = await sendRequest(this.apiKey, {
            type: 'data',
            method: 'GET',
            data: 'medias'
        })

        return data;
    }

    async getMedia(id) {

        let data = await sendRequest(this.apiKey, {
            type: 'data',
            method: 'GET',
            data: 'medias/' + id
        })

        return data;
    }

    async getProjects() {

        let data = await sendRequest(this.apiKey, {
            type: 'data',
            method: 'GET',
            data: 'projects'
        })

        return data;
    }

    async getProject(id) {

        let data = await sendRequest(this.apiKey, {
            type: 'data',
            method: 'GET',
            data: 'projects/' + id
        })

        return data
    }
}

module.exports = Wistia;