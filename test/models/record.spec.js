'use strict';

const assert = require('assert');
const Record = require('../../src/models/record');

describe('Record Class Test Case', () => {
    it('test options', () => {
        const result = new Record();
        result.id = 12;
        result.name = 'test';
        result.min = '11111';
        result.max = '111111';
        result.mac = '22222';

        assert.equal(12, result.id);
        assert.equal('test', result.name);
        assert.equal('11111', result.min);
        assert.equal('111111', result.max);
        assert.equal('22222', result.mac);
    });
});
