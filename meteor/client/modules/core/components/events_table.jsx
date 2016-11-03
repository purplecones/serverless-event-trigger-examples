import React from 'react';
import moment from 'moment';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

class EventsTable extends React.Component {
  constructor() {
    super();
  }
  renderRows() {
    return this.props.data.events.map((event, index) => {
      return (
        <Table.Row key={index}>
          <Table.Cell>{event.source}</Table.Cell>
          <Table.Cell>t</Table.Cell>
          <Table.Cell>{event.meta}</Table.Cell>
        </Table.Row>
      );
    });
  }
  render() {
    console.log(this.props.data);
    return (
      <Table celled>
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
