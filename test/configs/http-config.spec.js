'use strict';

const assert = require('assert');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '../../.env.test')});

const HttpConfig = require('../../src/configs/http-config');

describe('HttpConfig Class Test Case', () => {
    it('test proxy', () => {
        assert.equal('http://127.0.0.1:3128', HttpConfig.proxy);
    });

    it('test time out', () => {
        assert.equal(5000, HttpConfig.timeOut);
    });
});
