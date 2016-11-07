import {useDeps, composeAll, composeWithTracker } from 'mantra-core';

import Demo from '../components/demo.jsx';

export const composer = ({context}, onData) => {
  const { Collections, Meteor } = context();
  if (Meteor.subscribe('nodes').ready()) {
    const nodes = Collections.Nodes.find({}, { sort: { id: 1 }}).fetch();
    onData(null, {
      data: {
        nodes,
      },
    });
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Demo);
