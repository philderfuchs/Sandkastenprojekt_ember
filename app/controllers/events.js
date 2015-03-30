import Ember from 'ember';
import StateEnum from '../models/stateEnum';


export default Ember.ArrayController.extend({
    queryParams: ['state'],
    state: [],
    filteredEvents: Ember.computed(
        'state',
        function () {
            var state = this.get('state');
            if (state.length > 0) {

                return this.get('model').filter(function (event) {
                    var returnValue = false;
                    state.forEach(function (currentState) {

                        returnValue = returnValue || (event.get('state') == currentState);

                    });
                    return returnValue;
                });

            } else {
                return this.get('model');
            }
        }),
    manageStateClasses: function (state) {

        if (this.get('state').length == 0) {
            // no query parameters, remove all incactive
            for (var key in StateEnum) {
                this.set(key, true);
            }
        } else {
            // query parameters, make everything inactive
            for (var key in StateEnum) {
                if (this.get('state').contains(key)) {
                    this.set(key, true);
                } else {
                    this.set(key, false);
                }
            }
        }
    }.on('init').observes('state.[]'),

    actions: {
        setState: function (state) {
            if (this.get('state').contains(state)) {
                this.get('state').removeObject(state);
            } else {
                this.get('state').pushObject(state);
            }
        }
    }

});