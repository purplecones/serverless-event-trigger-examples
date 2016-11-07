import { Nodes } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.publish('nodes', function () {
    const selector = {
    };
    const options = {
      // tuning db qurying to be more realtime and show data as soon as it gets written to mongodb
      disableOplog: true,
      pollingIntervalMs: 500
    };

    return Nodes.find(selector, options);
  });
}
