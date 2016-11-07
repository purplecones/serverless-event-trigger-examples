import React from 'react';
import EventsTable from '../containers/events_table';
import Sections from './sections';

const Home = () => (
  <div className="div ui one column grid container">
    <div className="ui column">
      <h1>AWS Lambda Event Triggers using Serverless</h1>
      <p>Below are a few working examples of how to use the events to trigger your AWS Lambda functions using Serverless</p>
    </div>
    <div className="ui column">
      <Sections />
    </div>
    <div className="ui column">
      <EventsTable />
    </div>
  </div>
);

export default Home;
