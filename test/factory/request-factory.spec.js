'use strict';

const nock = require('nock');
const assert = require('assert');
const RequestFactory = require('../../src/factory/request-factory');

describe('RequestFactory Class Test Case', function () {
    it('test request', (done) => {
        const result = 'this is test string';
        nock('https://www.baidu.com').get('/').reply(200, result);
        RequestFactory.request({uri: 'https://www.baidu.com', method: 'GET'})
            .then((data) => {
                assert.equal(result, data);
                done();
            })
            .catch((err) => {
                assert.fail(err);
            });
    });
});
