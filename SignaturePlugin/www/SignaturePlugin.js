
var exec = require('cordova/exec');

exports.sss = function (arg0, success, error) {
    exec(success, error, 'SignaturePlugin', 'sss', [arg0]);
};
