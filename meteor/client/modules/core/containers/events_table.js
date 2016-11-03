import {useDeps, composeAll, composeWithTracker } from 'mantra-core';

import EventsTable from '../components/events_table.jsx';

export const composer = ({context}, onData) => {
  const { Collections, Meteor } = context();
  if (Meteor.subscribe('events').ready()) {
    const events = Collections.Events.find().fetch();
    onData(null, {
      data: {
        events,
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
)(EventsTable);
