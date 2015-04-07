/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/moment/moment.js');
app.import('bower_components/select2/select2.js');
app.import('bower_components/select2/select2.css');
app.import('bower_components/panelsnap/jquery.panelSnap.js');
app.import('bower_components/components-font-awesome/css/font-awesome.css');
app.import('vendor/cloudinary_js-master/jquery.ui.widget.js');
app.import('vendor/cloudinary_js-master/jquery.iframe-transport.js');
app.import('vendor/cloudinary_js-master/jquery.fileupload.js');
app.import('vendor/cloudinary_js-master/jquery.cloudinary.js');


module.exports = app.toTree();
