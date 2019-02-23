var express = require('express');
var router = express.Router();
var ec = require("../controllers/EntryController");

router.get('/', ec.getDefaultPage);

router.get('/p/:key', ec.getEntryDetailPage);

router.post('/save',ec.saveEntry);

router.get("/all",ec.getAllEntries);

module.exports = router;
