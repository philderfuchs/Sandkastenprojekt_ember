import Ember from 'ember';

export default Ember.Route.extend({
    model: function (params) {
        if (params.state) {

            //return this.store.find('event', {state : params.state});
            var returnTemp = [];
            var temp = this.store.all('event');
            temp.forEach(function (e) {
                if (e.get('state') == params.state) {
                    returnTemp.push(e);
                }
            });
            returnTemp = temp.filter(function(e) {
                return ( e.get('state') == params.state);
            });
            return returnTemp;
        } else {
            return this.store.find('event');
        }

    }
});