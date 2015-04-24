import Ember from 'ember';

export default Ember.Controller.extend({
    showingMap: false,
    actions: {
        showMap: function () {
            $('.map').toggle();
            this.toggleProperty('showingMap');
        }
    }
});
