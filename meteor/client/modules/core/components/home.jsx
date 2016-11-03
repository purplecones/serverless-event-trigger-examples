import React from 'react';
import EventsTable from '../containers/events_table';
import Menu from './menu';

const Home = () => (
  <div>
    <div className="div ui one column grid container">
      <div className="ui column">
        <EventsTable />
      </div>
    </div>
  </div>
);

export default Home;
