import Ember from "ember";
import StateEnum from '../models/stateEnum';

export default Ember.Handlebars.makeBoundHelper(function(value, options) {
    var out = "<div class='event-header'>";

    out = out + options.fn(items[0]) + "/" + options.fn(StateEnum[items[1]]);

    return out + "</div>";
});