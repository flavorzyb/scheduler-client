'use strict';

class Record {

    constructor() {
        /**
         *
         * @type {number}
         * @private
         */
        this._id = 0;
        /**
         *
         * @type {string}
         * @private
         */
        this._name = '';
        /**
         *
         * @type {string}
         * @private
         */
        this._min = '';
        /**
         *
         * @type {string}
         * @private
         */
        this._max = '';
        /**
         *
         * @type {string}
         * @private
         */
        this._mac = '';
    }

    /**
     * id
     * @return {number}
     */
    get id() {
        return this._id;
    }

    /**
     * id
     * @param {number} value
     */

    set id(value) {
        this._id = value;
    }

    /**
     * name
     * @return {string}
     */
    get name() {
        return this._name;
    }

    /**
     * name
     * @param {string} value
     */
    set name(value) {
        this._name = value;
    }

    /**
     * login time
     * @return {string}
     */
    get min() {
        return this._min;
    }

    /**
     * login time
     * @param {string} value
     */
    set min(value) {
        this._min = value;
    }

    /**
     * logout time
     * @return {string}
     */
    get max() {
        return this._max;
    }

    /**
     * logout time
     * @param {string} value
     */
    set max(value) {
        this._max = value;
    }

    /**
     * mac address
     * @return {string}
     */
    get mac() {
        return this._mac;
    }

    /**
     * mac address
     * @param {string} value
     */
    set mac(value) {
        this._mac = value;
    }
}

module.exports = Record;
