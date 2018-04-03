'use strict';

const fs = require('fs');
const path = require('path');

const configs = {};

class ConfigFactory {
    /**
     * load configs
     * @param {string} env
     * @return {Object}
     */
    getConfig(env) {
        if (configs[env]) {
            return configs[env];
        }

        let filePath = path.join(__dirname, '../../configs/');

        switch (env) {
            case 'prod':
                filePath = path.join(filePath, 'prod.json');
                break;
            default:
                filePath = path.join(filePath, 'dev.json');
        }

        if (fs.existsSync(filePath)) {
            configs[env] = require(filePath);
        } else {
            configs[env] = {};
        }

        return configs[env];
    }
}

const factory = new ConfigFactory();

module.exports = factory;
