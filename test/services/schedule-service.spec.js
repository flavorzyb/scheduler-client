'use strict';

const nock = require('nock');
const tough = require('tough-cookie');
const assert = require('assert');
const UrlConfig = require('../../src/configs/url-config');
const ScheduleService = require('../../src/services/schedule-service');

describe('ScheduleService Class Test Case', () => {
    /**
     *
     * @type {ScheduleService}
     */
    let service = null;
    beforeEach(() => {
        service = new ScheduleService();
        process.env['HTTP_PROXY'] = '';
    });

    it('test Login success', (done) => {
        const header = {'set-cookie':
        [ 'Authorization=Bearer:eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5YW5iaW4uemh1IiwiZXhwIjoxNTIyODk4MjI4fQ.pxRLG7e7ZQUduBTzBBjMbS0E4ULRJrbJG5Dfh0c5Sfz7w8ehcQIlUuJnU_OR5wBg1Y481qZDXhKIwUadZq5QZg',
            'JSESSIONID=0D0DB2173A6BE3699D1AF896815E5CDA;path=/wifi;HttpOnly' ]};
        const result = {'status':'ok','type':'success'};
        nock(UrlConfig.scheduleServerHost)
            .post(UrlConfig.scheduleServerLoginUrl.substring(UrlConfig.scheduleServerHost.length))
            .reply(200, result, header);
        service.login('test', '123456')
            .then((data) => {
                assert.equal('ok', data.status);
                done();
            })
            .catch((err) => {
                assert.fail(err);
            });
    });

    it('test Login success only on cookies', (done) => {
        const header = {'set-cookie': 'Authorization=Bearer:eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5YW5iaW4uemh1IiwiZXhwIjoxNTIyODk4MjI4fQ.pxRLG7e7ZQUduBTzBBjMbS0E4ULRJrbJG5Dfh0c5Sfz7w8ehcQIlUuJnU_OR5wBg1Y481qZDXhKIwUadZq5QZg'};
        const result = {'status':'ok','type':'success'};
        nock(UrlConfig.scheduleServerHost)
            .post(UrlConfig.scheduleServerLoginUrl.substring(UrlConfig.scheduleServerHost.length))
            .reply(200, result, header);
        service.login('test', '123456')
            .then((data) => {
                assert.equal('ok', data.status);
                done();
            })
            .catch((err) => {
                assert.fail(err);
            });
    });

    it('test Login fail', (done) => {
        const result = {'status':'ok','type':'success'};
        nock(UrlConfig.scheduleServerHost)
            .post(UrlConfig.scheduleServerLoginUrl.substring(UrlConfig.scheduleServerHost.length))
            .reply(500, result);
        service.login('test', '123456')
            .then((data) => {
                assert.fail(data);

            })
            .catch((err) => {
                assert.equal(500, err.statusCode);
                done();
            });
    });

    it('test fetch scheduler list success', (done) => {
        const result = {
            'list' : [ {
                'id' : 21,
                'name' : '王晓明',
                'min' : '2018-04-03 08:41:08',
                'max' : '2018-04-03 17:51:58',
                'mac' : 'A0:83:B6:36:AF:0F'
            }, {
                'id' : 21,
                'name' : '王晓明',
                'min' : '2018-04-02 08:49:42',
                'max' : '2018-04-02 17:31:46',
                'mac' : 'A0:83:B6:36:AF:0F'
            }, {
                'id' : 21,
                'name' : '王晓明',
                'min' : '2018-03-30 08:50:08',
                'max' : '2018-03-30 18:53:37',
                'mac' : 'A0:83:B6:36:AF:0F'
            }, {
                'id' : 21,
                'name' : '王晓明',
                'min' : '2018-03-29 08:49:36',
                'max' : '2018-03-29 19:14:07',
                'mac' : 'A0:83:B6:36:AF:0F'
            }, {
                'id' : 21,
                'name' : '王晓明',
                'min' : '2018-03-28 08:54:05',
                'max' : '2018-03-28 17:57:31',
                'mac' : 'A0:83:B6:36:AF:0F'
            }, {
                'id' : 21,
                'name' : '王晓明',
                'min' : '2018-03-27 08:53:35',
                'max' : '2018-03-27 17:52:39',
                'mac' : 'A0:83:B6:36:AF:0F'
            }, {
                'id' : 21,
                'name' : '王晓明',
                'min' : '2018-03-26 08:50:13',
                'max' : '2018-03-26 18:03:20',
                'mac' : 'A0:83:B6:36:AF:0F'
            }, {
                'id' : 21,
                'name' : '王晓明',
                'min' : '2018-03-23 08:42:19',
                'max' : '2018-03-23 19:39:52',
                'mac' : 'A0:83:B6:36:AF:0F'
            }, {
                'id' : 21,
                'name' : '王晓明',
                'min' : '2018-03-22 08:31:38',
                'max' : '2018-03-22 19:22:50',
                'mac' : 'A0:83:B6:36:AF:0F'
            }, {
                'id' : 21,
                'name' : '王晓明',
                'min' : '2018-03-21 08:51:46',
                'max' : '2018-03-21 18:31:36',
                'mac' : 'A0:83:B6:36:AF:0F'
            } ],
            'total' : 10,
            'p' : 1
        };
        const url = UrlConfig.scheduleServerFetchListUrl + '?s=50&p=1';
        service.cookies = [tough.Cookie.parse('JSESSIONID=0D0DB2173A6BE3699D1AF896815E5CDA;path=/wifi;HttpOnly')];
        nock(UrlConfig.scheduleServerHost)
            .get(url.substring(UrlConfig.scheduleServerHost.length))
            .reply(200, result);
        service.fetchList()
            .then((data) => {
                assert.equal(10, data.length);
                done();
            })
            .catch((err) => {
                assert.fail(err);
            });
    });

    it('test fetch scheduler empty list success', (done) => {
        const result = {
            'total' : 10,
            'p' : 1
        };
        const url = UrlConfig.scheduleServerFetchListUrl + '?s=50&p=1';
        service.cookies = [tough.Cookie.parse('JSESSIONID=0D0DB2173A6BE3699D1AF896815E5CDA;path=/wifi;HttpOnly')];
        nock(UrlConfig.scheduleServerHost)
            .get(url.substring(UrlConfig.scheduleServerHost.length))
            .reply(200, result);
        service.fetchList()
            .then((data) => {
                assert.equal(0, data.length);
                done();
            })
            .catch((err) => {
                assert.fail(err);
            });
    });

    it('test fetch scheduler list fail', (done) => {
        const result = {
            'total' : 10,
            'p' : 1
        };
        const url = UrlConfig.scheduleServerFetchListUrl + '?s=50&p=1';
        service.cookies = [tough.Cookie.parse('JSESSIONID=0D0DB2173A6BE3699D1AF896815E5CDA;path=/wifi;HttpOnly')];
        nock(UrlConfig.scheduleServerHost)
            .get(url.substring(UrlConfig.scheduleServerHost.length))
            .reply(500, result);
        service.fetchList()
            .then((data) => {
                assert.fail(data);
            })
            .catch((err) => {
                assert.equal(500, err.statusCode);
                done();
            });
    });
});
