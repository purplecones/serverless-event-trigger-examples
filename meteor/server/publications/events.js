import { Events } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.publish('events', function () {
    const selector = {
    };
    const options = {
      sort: { timestamp: -1 },
      limit: 10,
      // tuning db qurying to be more realtime and show data as soon as it gets written to mongodb
      disableOplog: true,
      pollingIntervalMs: 500
    };

    return Events.find(selector, options);
  });
}
