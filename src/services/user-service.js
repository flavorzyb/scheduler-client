'use strict';

const tough = require('tough-cookie');
const rp = require('request-promise');
const Record = require('../models/record');
const RequestFactory = require('../factory/request-factory');
const UrlConfig = require('../configs/url-config');
const HttpConfig = require('../configs/http-config');

class UserService {
    /**
     * sync scheduler list to user server
     * @param {Record[]} data
     */
    syncSchedulerList(data) {
    }

    /**
     * fetch user account
     */
    fetchUserAccount() {
    }
}

module.exports = UserService;
