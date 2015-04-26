import Ember from "ember";
import StateEnum from '../models/stateEnum';

export default Ember.Handlebars.makeBoundHelper(function(city, state, background) {
  if(!city){
    city = "";
  }
  if(!state){
    state = "SAXONY";
  }
  if(!background){
    background = "";
  }
  //var grayscaledBackground = background.substring(0, background.indexOf('upload')+7) + "e_grayscale/" + background.substring(background.indexOf('upload')+7, background.length);
  return "<div class='event-header-wrapper'><div class='blurred-background' style='background-image: url(" + background + ")'></div> <div class='event-header state-" + state + "'><div class='valigned'><span class='city'>" + city + "</span><br>" + StateEnum[state].toUpperCase() + "</b></div></div>";
});
