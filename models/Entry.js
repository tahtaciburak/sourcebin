function Entry(text,expiration,secret,created_at){
    this.text = text;
    this.expiration = expiration;
    this.secret = secret;
    this.created_at = created_at;
}

Entry.prototype.isExpired = function (){
    //TODO burada expiration tarihinin kontrolunu yap.
    return false;
}

Entry.prototype.isEncrypted = function(){
    return(this.secret !== undefined)
}

Entry.prototype.vectorize = function(){
    let arr = [];
    arr.push(this.text);
    arr.push(this.expiration);
    arr.push(this.secret);
    arr.push(this.created_at);
    return arr;
}
