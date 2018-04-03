'use strict';

const rp = require('request-promise');

class RequestFactory {
    /**
     *
     * @param {Object} options
     * @return {Promise<Object>}
     */
    request(options) {
        return rp(options);
    }
}

const factory = new RequestFactory();

module.exports = factory;
