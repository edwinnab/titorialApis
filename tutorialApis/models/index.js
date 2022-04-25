//config the mongoDB and mongoose
//mongoose is a ODM(Object Document Mapper) that maps the object model to the document database
const dbConfig = require("../config/db.config");
const mongoose = require('mongoose');


//define the db,url, model, export the db
const db = {}
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model")(mongoose);
module.exports = db;