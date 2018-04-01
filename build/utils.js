const path = require('path');

exports.resolve = function (targetPath) {
    return path.join(__dirname, '..', targetPath);
};
