import Ember from 'ember';

export default Ember.Route.extend({
    model: function (params) {
        console.log("MODEL HOOK", params.state);
        if(params.state){
            return this.store.find('event', {state : params.state});
        } else {
            return this.store.find('event');
        }

    }
});