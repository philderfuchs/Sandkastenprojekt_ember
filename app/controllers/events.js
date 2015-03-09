import Ember from 'ember';
import StateEnum from '../models/stateEnum';

export default Ember.ArrayController.extend({
    _newTags: [],
    listAllStates: (function() {
        var array = [];
        for (var key in StateEnum) {
            array.push({key: key, value: StateEnum[key]});
        }
        return array;
    }).property(),
    currentTags: function (){
        /*return this.get('_newTags').map(function (tag) {
            return tag.get('name');
        });*/

        return this.get('_newTags').mapBy('name');
    }.property('_newTags.@each'),

    actions: {
        createEvent() {
            // Get the todo title set by the "New Todo" text field
            var title = this.get('newTitle');
            if (!title.trim()) {
                return;
            }

            var date = this.get('newDate');
            if (date) {
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
            this._newTags.forEach(function(tag) {
                tag.save();
                newEvent.get('tags').pushObject(tag);
            });
            // Clear the "New Todo" text field
            this.set('newTitle', '');
            this.set('_newTags', []);

            // Save the new model
            newEvent.save();
        },
        addTag() {
            var name = this.get('newTag');
            if (!name.trim()) {
                return;
            }
            var newTag = this.store.createRecord('tag', {
                name: name
            });
            this.get('_newTags').pushObject(newTag);
            this.set('newTag', '');
        }
    }
});