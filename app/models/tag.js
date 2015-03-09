import DS from 'ember-data';

var Tag =  DS.Model.extend({
    name: DS.attr('string')
});

Tag.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: 'HipHop',
        },
        {
            id: 2,
            name: 'Workshop'

        },
        {
            id: 3,
            name: '2vs2'
        },
        {
            id: 4,
            name: '3vs3'
        },
        {
            id: 5,
            name: '5vs5'
        },
        {
            id: 6,
            name: 'Locking'
        }
    ]
});

export default Tag;