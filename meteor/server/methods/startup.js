import { Nodes } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import _ from 'lodash';

const TOTAL_NODES = 20;

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

export default function () {
  Meteor.startup(() => {
    _.times(TOTAL_NODES, (i) => {
      Nodes.upsert({ id: i + 1},
        {
          id: i + 1,
          nodeSize: randomInt(30, 100)
        }
      );
    });
  });
}
