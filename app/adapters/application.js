import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace: 'api',
    host: 'http://localhost:5050'
});

//export default DS.FixtureAdapter.extend({
//    queryFixtures: function(fixtures, query, type) {
//        var key = Ember.keys(query)[0];
//        return fixtures.filterBy(key, query[key]);
//    }
//
//});