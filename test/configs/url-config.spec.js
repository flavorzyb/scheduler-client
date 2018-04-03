'use strict';

const assert = require('assert');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../../.env.test')});

const UrlConfig = require('../../src/configs/url-config');

describe('UrlConfig Class Test Case', () => {
    it('test server host', () => {
        assert.equal('http://www.schedule.com', UrlConfig.scheduleServerHost);
        assert.equal('http://www.user.com', UrlConfig.userServerHost);
    });
});
