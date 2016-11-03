import { useDeps, composeAll, compose } from 'mantra-core';
import MainLayout from '../components/main_layout.jsx';

const composer = ({ context }, onData) => {
  // const { Meteor } = context();
  // Meteor.subscribe('offerings.list');
  onData(null, {});
};

const depsMapper = (context) => ({
  context: () => context,
});

export default composeAll(
  compose(composer),
  useDeps(depsMapper)
)(MainLayout);
