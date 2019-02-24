var base62 = require("base62/lib/ascii");

exports.url2id = function(url){
    return parseInt(base62.decode(url).toString());
}

exports.id2url = function(id){
    return base62.encode(id.toString());
}