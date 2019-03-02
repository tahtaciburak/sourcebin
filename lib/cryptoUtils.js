var crypto = require('crypto')

exports.encrypt = function(text,password){
    var cipher = crypto.createCipher('aes-256-ctr',password)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}

exports.decrypt = function(text,password){
    var decipher = crypto.createDecipher('aes-256-ctr',password)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
}

exports.hash = function(text){
    var hash = crypto.createHash('md5');
    var h = hash.update(text+"saltladimsenibebegimbirazkarmasiko1907",'hex','utf8')
    return h.digest('hex');
}