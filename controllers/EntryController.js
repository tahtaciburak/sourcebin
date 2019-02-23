
var entry = require("../models/Entry");
var db = require("../lib/db");
var utils = require("../lib/utils");

exports.getDefaultPage = function(req, res) {
    res.render('index', { title: 'Express', status:"new", content: "buraaa bisey yaz" });
};

exports.getEntryDetailPage = function(req, res) {
    db.query("SELECT * FROM paste WHERE id=?",[parseInt(utils.url2id(req.params["key"])-999999)],function(err,result){
        if (err) throw err;
        res.render('index', {title: 'Express', status:"details" , content: result[0].text})
    });
};

exports.saveEntry = function(req, res, next) {    
    db.query("INSERT INTO paste(text,secret,expiration,created_at) values(? , ? , DATE_ADD(NOW(), INTERVAL 1 YEAR),NOW());",[req.body["text"],req.body["secret"]],function(err,result){
        if (err) throw err; 
        res.send( { "url": req.headers.host+"/p/"+utils.id2url(result.insertId+999999) } );
    });
    return "burak"
    
};

exports.getAllEntries = function(req, res){
    db.query("SELECT * FROM paste;",function(err,res){
        if (err) throw err;
        console.log(res);
    });
}