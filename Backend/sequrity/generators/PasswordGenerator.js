const crypto = require('crypto');
const hmacKey = '8734d30d52eb8a31517e8318e34c8eae'; //don't change hmac!

module.exports = function(password) {

    if(password == '') {
        return password;
    }

    return crypto
                .createHmac('md5', hmacKey)
                .update(password)
                .digest("hex");
}