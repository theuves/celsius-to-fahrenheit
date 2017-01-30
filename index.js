'use strict';

module.exports = function (celsius) {
    if (typeof celsius === 'number') {
        return celsius * 1.8 + 32;
    }
};
