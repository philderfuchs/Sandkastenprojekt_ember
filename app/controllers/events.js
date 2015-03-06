import Ember from 'ember';
import StateEnum from '../models/stateEnum';

export default Ember.ArrayController.extend({
    listAllStates: (function() {
        var array = [];
        for (var key in StateEnum){
            array.push({key: key, value: StateEnum[key]});
        }
        return array;
    }).property(),

    actions: {
        createEvent() {
            // Get the todo title set by the "New Todo" text field
            var title = this.get('newTitle');
            if (!title.trim()) {
                return;
            }

            var date = this.get('newDate');
            if(date){
                date = new Date(date).toLocaleDateString();
            } else {
                date = new Date().toLocaleDateString();
            }

            var state = this.get('newState');
            var city = this.get('newCity');
            // Create the new Todo model
            var newEvent = this.store.createRecord('event', {
                title: title,
                date: date,
                state: state,
                city: city
            });

            // Clear the "New Todo" text field
            this.set('newTitle', '');

            // Save the new model
            newEvent.save();
        }
    }
});