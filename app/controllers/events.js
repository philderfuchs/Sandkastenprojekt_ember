import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        createEvent() {
            // Get the todo title set by the "New Todo" text field
            var title = this.get('newTitle');
            if (!title.trim()) {
                return;
            }
            // Create the new Todo model
            var newEvent = this.store.createRecord('events', {
                title: title,
                date: '29.03.2015',
                location: 'Leipzig / Dresden'
            });

            // Clear the "New Todo" text field
            this.set('newTitle', '');

            // Save the new model
            newEvent.save();
        }
    }
});