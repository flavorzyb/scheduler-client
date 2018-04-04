'use strict';

const tough = require('tough-cookie');
const rp = require('request-promise');
const Record = require('../models/record');
const RequestFactory = require('../factory/request-factory');
const UrlConfig = require('../configs/url-config');
const HttpConfig = require('../configs/http-config');

/**
 * create Request options
 * @return {{method: string, timeout: number, json: boolean, proxy: string}}
 */
function createRequestOptions() {
    const result = {
        method: 'GET',
        timeout: HttpConfig.timeOut,
        json: true,
        proxy: HttpConfig.proxy,
    };

    return result;
}

class ScheduleService {

    constructor() {
        this.cookies = [];
    }

    /**
     * login schedule system
     *
     * @param {string} username
     * @param {string} password
     * @return {Promise<{status: string, type: string}>}
     */
    login(username, password) {
        const body = {'loginName': username, 'password': password};

        const options = createRequestOptions();
        options.uri = UrlConfig.scheduleServerLoginUrl;
        options.method = 'POST';
        options.body = body;
        options.resolveWithFullResponse = true;

        return new Promise((resolve, reject) => {
            RequestFactory.request(options)
                .then((response) => {
                    if (response.headers['set-cookie'] instanceof Array) {
                        this.cookies = response.headers['set-cookie'].map(tough.Cookie.parse);
                    } else {
                        this.cookies = [tough.Cookie.parse(response.headers['set-cookie'])];
                    }
                    return resolve(response.body);
                })
                .catch((err) => {
                    return reject(err);
                });
        });
    }

    /**
     * fetch list
     *
     * @return {Promise<Record[]>}
     */
    fetchList() {
        const cookieJar = rp.jar();
        this.cookies.forEach((value) => {
            cookieJar.setCookie(value, UrlConfig.scheduleServerHost);
        });

        const options = createRequestOptions();
        options.uri = UrlConfig.scheduleServerFetchListUrl + '?s=50&p=1';
        options.method = 'GET';
        options.jar = cookieJar;
        options.resolveWithFullResponse = false;
        return new Promise((resolve, reject) => {
            RequestFactory.request(options)
                .then((data) => {
                    const result = [];
                    if (data.list) {
                        for (const v of data.list) {
                            const record = new Record();
                            record.id = v.id;
                            record.name = v.name;
                            record.min = v.min;
                            record.max = v.max;
                            record.mac = v.mac;
                            result.push(record);
                        }
                    }

                    return resolve(result);
                })
                .catch((err) => {
                    return reject(err);
                });
        });
    }
}

module.exports = ScheduleService;
