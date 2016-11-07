import React from 'react';
import moment from 'moment';
import Timeago from 'react-timeago';
import { Table } from 'semantic-ui-react';

class EventsTable extends React.Component {
  constructor() {
    super();
  }
  renderRows() {
    return this.props.data.events.map((event, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>{event.source}</Table.Cell>
          <Table.Cell>
            { moment(event.timestamp).format('MM-DD-YY HH:mm:ss:SSS') } | <Timeago date={event.timestamp}/></Table.Cell>
          <Table.Cell>{event.meta}</Table.Cell>
        </Table.Row>
      );
    });
  }
  render() {
    return (
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Source</Table.HeaderCell>
            <Table.HeaderCell>Timestamp</Table.HeaderCell>
            <Table.HeaderCell>Meta</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.renderRows()}
        </Table.Body>
      </Table>
    );
  }
}

export default EventsTable;
