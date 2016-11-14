var express = require("express")
var Movie = require('../models/movies.js');
var mongoose = require('mongoose');

var Router = express.Router();
Router.get('/:ids=?',  function(req, res) {
    var id = req.params.ids;
    Item.find({'itemid': parseFloat(id)}, function (err,items) {
    res.status(200).json(items);
  });
});

module.exports = Router;
