import Ember from 'ember';
import config from './../config/environment';

export default Ember.View.extend({
  templateName: 'cloudinary',
  didInsertElement: function() {
    var controller = this.get('controller');

    this.$().unsigned_cloudinary_upload(
      config.CLOUDINARY_UPLOAD_PRESET, {
        cloud_name: config.CLOUDINARY_NAME
      }, {
        disableImageResize: false,
        imageMaxWidth: 1000,
        imageMaxHeight: 1000,
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp|ico)$/i,
        maxFileSize: 5000000 // 5MB
      }
    );

    this.$().bind('fileuploaddone', function (e, data) {
      controller.set('model.imageURL', data.result.url);
    });
  }
});
