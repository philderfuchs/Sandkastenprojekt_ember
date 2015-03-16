import Ember from 'ember';
import StateEnum from '../../models/stateEnum';

export default Ember.ObjectController.extend({
    allStatesAsList: (function () {
        var array = [];
        for (var key in StateEnum) {
            array.push({key: key, value: StateEnum[key]});
        }
        return array;
    }).property(),

    tagsByNames: function () {
        return this.get('model').get('tags').mapBy('name');
    }.property('model.tags.@each'),

    actions: {
        addTag() {
            var name = this.get('newTag');
            if (!name.trim()) {
                return;
            }
            var newTag = this.store.createRecord('tag', {
                name: name
            });
            //this.get('_tags').pushObject(newTag);
            this.set('newTag', '');

            this.get('model').get('tags').pushObject(newTag);

        },
        createEvent() {
            var _this = this;

            var date = this.get('newDate');
            if (date) {
                date = new Date(date);
            } else {
                date = new Date();
            }

            this.get('model').set('date', date);


            var tagSavePromises = [];

            _this.get('model').get('tags').forEach(function (tag) {
                tagSavePromises.push(tag.save());
            });

            Ember.RSVP.all(tagSavePromises).then(function() {
                console.log("ALL TAG PROMISES RESOLVED");
                // Save the new model
                _this.get('model').save().then(function(){
                    _this.transitionToRoute('events');
                });

            });
        }
    }

});