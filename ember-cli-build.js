/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });
  var appType = 'material'; //material or ios
  app.import('bower_components/framework7/dist/css/framework7.'+appType+'.css');
  app.import('bower_components/framework7/dist/css/framework7.'+appType+'.colors.css');
  app.import('bower_components/Framework7/dist/js/framework7.min.js');

  return app.toTree();
};
