import Ember from "ember";
import StateEnum from '../models/stateEnum';

export default Ember.Handlebars.makeBoundHelper(function(city, state) {
  if(!city){
    city = "";
  }
  return "<div class='event-header state-" + state + "'>" + city + "<br><b>" + StateEnum[state] + "</b></div>";
});