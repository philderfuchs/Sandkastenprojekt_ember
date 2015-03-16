import Ember from 'ember';

export default Ember.Route.extend({
    model: function (params) {
        //if (params.state) {
        //    //return this.store.find('event', {state : params.state});
        //    var allEvents = this.store.all('event');
        //    return allEvents.filter(function (e) {
        //        return ( e.get('state') == params.state);
        //    });
        //} else {
            return this.store.find('event');
        //}

    }
});