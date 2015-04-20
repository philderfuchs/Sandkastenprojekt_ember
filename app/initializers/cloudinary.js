import config from './../config/environment';


export default {
  name: 'cloudinary',

  initialize: function(/* container, app */) {
    $.cloudinary.config({
      cloud_name: config.CLOUDINARY_NAME
    });
  }
};
