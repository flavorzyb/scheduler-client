'use strict';

const env = require('dotenv').config({encoding:'utf8'});

if (env.error) {
    throw env.error;
}

class UrlConfig {
    /**
     * get schedule server host
     *
     * @return {string}
     */
    get scheduleServerHost() {
        return process.env.SCHEDULE_SERVER_HOST;
    }

    /**
     * get user server host
     * @return {string}
     */
    get userServerHost() {
        return process.env.USER_SERVER_HOST;
    }

    /**
     *  get schedule server login url
     * @return {string}
     */
    get scheduleServerLoginUrl() {
        return this.scheduleServerHost + '/wifi/login';
    }

    get scheduleServerFetchListUrl () {
        return this.scheduleServerHost + '/wifi/login';
    }
}

const config = new UrlConfig();
module.exports = config;
