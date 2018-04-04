'use strict';

require('dotenv').config({encoding:'utf8'});

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

    /**
     * get fetch scheduler list url
     * @return {string}
     */
    get scheduleServerFetchListUrl () {
        return this.scheduleServerHost + '/wifi/api/wifi';
    }

    get userServiceListApiUrl() {
        return this.userServerHost + '/api/scheduler';
    }
}

const config = new UrlConfig();
module.exports = config;
