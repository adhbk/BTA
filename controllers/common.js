// common.js - controlleur

    /* Partie du programme qui s'exécute au démarrage */
exports.setModules = function () {
var   NA = this;
      NA.sys = require('sys')
};

exports.setSessions = function (next) {
  var NA = this;

  next();
};