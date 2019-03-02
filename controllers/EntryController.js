
var entry = require("../models/Entry");
var db = require("../lib/db");
var utils = require("../lib/utils");
var cryptoUtils = require("../lib/cryptoUtils");
var crypto = require('crypto');

exports.getDefaultPage = function(req, res) {
    res.render('index', { status:"new", isEncrypted: false, content: "Write something here..." });
};

exports.getEntryDetailPage = function(req, res, next) {
    db.query("SELECT * FROM paste WHERE id=? AND expiration > NOW()",[parseInt(utils.url2id(req.params["key"])-999999)],function(err,result){
        if (err) return err;
        if (result[0] !== undefined) {
            if (result[0].secret){
                res.render('index', { status:"details" , isEncrypted: true, content: ""})            
            }else{
                res.render('index', { status:"details" , isEncrypted: false, content: result[0].text})    
            }
        }else{
            res.redirect("/");
        }
    });
};

exports.saveEntry = function(req, res, next) {    

    let interval = "1 YEAR";
    if (req.body["expiration"] === "month"){
        interval = "1 MONTH";
    } else if (req.body["expiration"] === "day"){
        interval = "1 DAY"
    } else if (req.body["expiration"] === "hour"){
        interval = "1 HOUR"
    } else if (req.body["expiration"] === "minute"){
        interval = "5 MINUTES"
    }

    let secret = ""
    if (req.body["secret"]){
        secret = crypto.createHash('md5').update(req.body["secret"]).digest("hex");
        console.log(secret)
    }
    db.query("INSERT INTO paste(text,secret,expiration,created_at) values(? , ? , DATE_ADD(NOW(), INTERVAL "+interval+"),NOW());",[req.body["text"],secret],function(err,result){
        if (err) throw err; 
        res.send( { "url": req.headers.host+"/p/"+utils.id2url(result.insertId+999999) } );
    });    
};

exports.getAllEntries = function(req, res){
    db.query("SELECT * FROM paste;",function(err,res){
        if (err) throw err;
        console.log(res);
    });
}

exports.decryptPaste = function(req, res,next ){
    console.log(parseInt(utils.url2id(req.body["key"])-999999));
    console.log(req.body["secret"])    
    db.query("SELECT * FROM paste WHERE id=?",[parseInt(utils.url2id(req.body["key"])-999999)],function(err,result){
        if (err) return err;
        if (result[0] === undefined) return next();
        console.log(result[0].secret);
        if (result[0].secret === crypto.createHash('md5').update(req.body["secret"]).digest("hex")){
            res.send({ status: 200, content: result[0].text })            
        }else{
            res.send({ status: 400, content: "" })            
        }
    });
}
