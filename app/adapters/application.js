import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace: 'api',
    host: 'http://localhost:5050',

    ajaxOptions: function(url, type, options) {
        var hash = this._super(url, type, options);
        hash.contentType = 'text/plain';

        return hash;
    }
});

//export default DS.FixtureAdapter.extend({
//    queryFixtures: function(fixtures, query, type) {
//        var key = Ember.keys(query)[0];
//        return fixtures.filterBy(key, query[key]);
//    }
//
//});