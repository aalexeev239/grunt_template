var objectAssign = require('object-assign');
var helper = require('handlebars-helper-repeat');

module.exports.register = function (Handlebars, options) {
  'use strict';

  Handlebars.registerHelper('repeat', helper);

  Handlebars.registerHelper('withHash', function(options) {
      var data = objectAssign({}, this, options.hash);
      return options.fn(data);
    }
  );

};


