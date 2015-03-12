import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(date) {
    moment().locale('de');
    return moment(date).format('L');
});