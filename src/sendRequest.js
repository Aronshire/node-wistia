const request = require('request');
module.exports = async (apikey, options) => {

    return new Promise((resolve, reject) => {
        let url;
        let method;
        if (!options) {
            reject('No options provided');
        }

        if (options.type) {
            if (options.type !== 'upload' && options.type !== 'data') {
                reject('Type must be either upload or data');
            }
        }

        if (!options.method) {
            reject('No method provided');
        } else {
            method = options.method;
        }

        if (options.type === 'upload') url = "https://upload.wistia.com/";

        if (options.type === 'data') url = "https://api.wistia.com/v1/" + options.data + ".json";

        url = url + "?api_password=" + apikey;

        request({
            url: url,
            method: method,
            formData: options.formData,
        }, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                body = JSON.parse(body);
                resolve(body);
            }
        });
    });
}