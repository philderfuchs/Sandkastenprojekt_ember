import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(date) {
    // TODO: fix localization
    // moment(date).locale('de').format('LLL')
    return new Date(date).toLocaleDateString();
});