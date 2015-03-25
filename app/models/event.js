import DS from 'ember-data';

var Event = DS.Model.extend({
    title: DS.attr('string'),
    date: DS.attr('string'),
    state: DS.attr('string'),
    city: DS.attr('string'),
    tags: DS.hasMany('tag')
});

//Event.reopenClass({
//    FIXTURES: [
//        {
//            id: 1,
//            title: 'Saxons Dance Off',
//            date: '29/03/2015',
//            city: 'Dresden',
//            state: 'SAXONY',
//            tags: [1]
//        },
//        {
//            id: 2,
//            title: 'Improve your style',
//            date: '29.03.2015',
//            city: 'Jena',
//            state: 'THURINGIA',
//            tags: [4, 5]
//        },
//        {
//            id: 3,
//            title: 'Saxons Dance Off',
//            date: '29.03.2015',
//            city: 'Dresden',
//            state: 'SAXONY',
//            tags: [6]
//        }
//    ]
//});

export default Event;