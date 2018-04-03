'use strict';

const assert = require('assert');
const RequestFactory = require('../../src/factory/request-factory');

describe('RequestFactory Class Test Case', function () {
    it('test request', (done) => {
        RequestFactory.request({uri: 'https://www.baidu.com'})
            .then((data) => {
                done();
            })
            .catch((err) => {
                assert.fail(err);
            });
    });
});
