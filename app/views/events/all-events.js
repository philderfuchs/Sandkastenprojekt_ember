import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'all-events',
    didInsertElement: function () {
        $('.events').panelSnap({
            $menu: $('header .navigation'),
            slideSpeed: 100
        });
    }
});
