import { Events } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.publish('events', function () {
    const selector = {
        // active: true
    };
    const options = {
        // fields: {_id: 1, title: 1},
        // sort: {createdAt: -1},
        // limit: 10
    };

    return Events.find(selector, options);
  });
}
