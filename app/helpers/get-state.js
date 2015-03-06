import Ember from "ember";
import StateEnum from '../models/stateEnum';

export default Ember.Handlebars.makeBoundHelper(function(city, state) {
  return "<div class='event-header state-" + state + "'>" + city + " / " + StateEnum[state] + "</div>";
});