'use strict';

module.exports = function (c) {
    if (typeof c !== 'number') {
        throw new TypeError('Expected a number');
    }

    return c * 1.8 + 32;
};
