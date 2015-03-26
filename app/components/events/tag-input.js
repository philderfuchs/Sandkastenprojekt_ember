import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'input',

    placeholder: null, // passed in
    tags: null, //

    didInsertElement: function () {
        var _this = this;
        var options = {};

        options.placeholder = this.get('placeholder');
        options.tags = this.get('tags');

        this._select = this.$().select2(options);

        _this._select.on("select2-selecting", function (e) {
            _this.sendAction("addTag", e.choice.text);
        });
        _this._select.on("select2-removing", function (e) {
            _this.sendAction("removeTag", e.choice.text);
        });
    }
});
