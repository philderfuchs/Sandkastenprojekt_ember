import Ember from 'ember';
import StateEnum from '../../models/stateEnum';

export default Ember.ObjectController.extend({
      _tags: [],
    allStatesAsList: (function () {
        var array = [];
        for (var key in StateEnum) {
            array.push({key: key, value: StateEnum[key]});
        }
        return array;
    }).property(),

    newDate: new Date(),

    allTagsByNames: function () {
        return this.store.all('tag').mapBy('name');
    }.property(),

    styleBackgroundImage: function(){
        return "background-image:url('" + this.get('model').get('imageURL') + "');height:91.1vh";
    }.property('model.imageURL'),

    finalDate: function(){
      return new Date(this.get('newDate'));
    }.property('newDate'),

    actions: {
        addTag(name) {
            this.get('_tags').pushObject(name);
        },
        removeTag(name) {
            this.get('_tags').removeObject(name);
        },
        createEvent() {
            var _this = this;

            this.set('model.date', this.get('finalDate'));

            this.get('_tags').forEach(function (name) {
                _this.get('model').get('tags').createRecord({name: name});
            });
            this.set('_tags', []);

            var tagSavePromises = [];
            _this.get('model').get('tags').forEach(function (tag) {
                tagSavePromises.push(tag.save());
            });

            Ember.RSVP.all(tagSavePromises).then(function () {
                console.log("ALL TAG PROMISES RESOLVED");
                // Save the new model
                _this.get('model').save().then(function () {
                    _this.transitionToRoute('events');
                });

            });
        },
        cancel(){
            this.transitionToRoute('events');
        }
    }

});
