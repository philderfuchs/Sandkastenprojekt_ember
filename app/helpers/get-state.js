import Ember from "ember";
import StateEnum from '../models/stateEnum';

export default Ember.Handlebars.makeBoundHelper(function(value, options) {
  return StateEnum[value];
});