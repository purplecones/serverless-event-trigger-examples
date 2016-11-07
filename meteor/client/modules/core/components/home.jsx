import React from 'react';
import EventsTable from '../containers/events_table';
import Sections from './sections';

const Home = () => (
  <div className="div ui one column grid container">
    <div className="ui column">
      <h1>AWS Lambda Event Triggers using Serverless</h1>
      <p>Below are a few working examples of how to use events to trigger your AWS Lambda functions using Serverless</p>
    </div>
    <div className="ui column">
      <Sections />
    </div>
    <div className="ui column">
      <EventsTable />
    </div>
    <a href="https://github.com/purplecones/serverless-event-trigger-examples">
      <img
        style={{position: 'absolute', top: 0, right: 0, border: 0}}
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
        alt="Fork me on GitHub"
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"/>
    </a>
  </div>
);

export default Home;
