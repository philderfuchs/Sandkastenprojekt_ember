import DS from 'ember-data';

var Event = DS.Model.extend({
    title: DS.attr('string'),
    date: DS.attr('date'),
    location: DS.attr('string')
});

Event.reopenClass({
    FIXTURES: [
        {
            id: 1,
            title: 'Saxons Dance Off',
            date: '29/03/2015',
            location: 'Dresden / Sachsen'

        },
        {
            id: 2,
            title: 'Improve your style',
            date: '29.03.2015',
            location: 'Dresden / Sachsen'
        },
        {
            id: 3,
            title: 'Saxons Dance Off',
            date: '29.03.2015',
            location: 'Dresden / Sachsen'
        }
    ]
});

export default Event;