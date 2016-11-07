import {useDeps, composeAll, composeWithTracker } from 'mantra-core';

import Demo from '../components/demo.jsx';

export const composer = ({context}, onData) => {
  onData(null, { });
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Demo);
