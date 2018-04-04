'use strict';

require('dotenv').config({encoding:'utf8'});

class HttpConfig {
    /**
     * http/https proxy
     *
     * @return {string}
     */
    get proxy() {
        return process.env.HTTP_PROXY;
    }

    /**
     * http/https time out
     *
     * @return {number}
     */
    get timeOut() {
        return process.env.HTTP_TIMEOUT;
    }
}

const config = new HttpConfig();

module.exports = config;
