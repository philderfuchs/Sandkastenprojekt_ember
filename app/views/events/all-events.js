import Ember from 'ember';

export default Ember.View.extend(Ember.TargetActionSupport, {
    templateName: 'all-events',
    showingMap: (function(){
      return this.get('controller.controllers.application.showingMap');
    }).property('controller.controllers.application.showingMap'),
    click: function(){
      if(this.get('showingMap')){
        this.triggerAction({
          action: 'showMap',
          target: this.get('controller.controllers.application'),
          actionContext: this.get('context')
        }); //
      }
    },
    didInsertElement: function () {
        $('.events').panelSnap({
            $menu: $('header .navigation'),
            slideSpeed: 100
        });
    }
});
