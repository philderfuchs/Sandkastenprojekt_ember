import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        showMap: function () {
            $('.map').toggle();
            $('.view-events').addClass( 'blurred' );
        }
    }
});
