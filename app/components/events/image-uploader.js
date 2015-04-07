import Ember from 'ember';

export default Ember.Component.extend({

    didInsertElement: function () {
        $.cloudinary.config({ cloud_name: 'dy055wvbg', api_key: '796298139888476'});
    },
    actions : {
        upload: function(){
            console.log("uuuuuupload");
            var _this = this;


        }
    }

});
