const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let activeSchema = new Schema({
    'eveId': String,
    'editorList': String,
    'title': String
});

module.exports = mongoose.model('eveconfigs', activeSchema);
