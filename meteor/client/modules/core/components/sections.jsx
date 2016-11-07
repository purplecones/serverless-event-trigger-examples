import React from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

class SectionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'schedule',
    };
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  }
  getSectionContent() {
    let content = {
      code: '',
      desc: '',
      docLink: '',
    };
    switch (this.state.activeItem) {
      case 'schedule':
        content.code = `functions:
  scheduledEvent:
    handler: handler.scheduledEvent
    events:
      - schedule: rate(1 minute)`;
        content.desc = 'Schedule is set at one minute. You can have multiple schedules for a single lambda.';
        content.docLink = 'https://serverless.com/framework/docs/providers/aws/events/schedule/';
        break;
      case 's3Event':
        content.code = `functions:
  s3Event:
    handler: handler.s3Event
    events:
      - s3: my-unique-bucket`;
        content.desc = 'Schedule is set at one minute. You can have multiple schedules for a single lambda.';
        content.docLink = 'https://serverless.com/framework/docs/providers/aws/events/s3/';
        break;
      case 'apiGateway':
        content.code = `functions:
  apiGatewayEvent:
    handler: handler.apiGatewayEvent
    events:
      - http:
          path: events/create
          method: post`;
        content.desc = 'Schedule is set at one minute. You can have multiple schedules for a single lambda.';
        content.docLink = 'https://serverless.com/framework/docs/providers/aws/events/apigateway/';
        break;
    }
    return (
      <div className="ui two column grid">
        <div className="ui column">
          <pre className="codeblock">
            <code className="code">{content.code}</code>
          </pre>
        </div>
        <div className="ui column">
          <div className="description">
            <p>{content.desc}</p>
            <a target="_blank" href={content.docLink}>Documentation</a>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='schedule'
            active={activeItem === 'schedule'}
            onClick={this.handleItemClick}
            >
            Schedule
          </Menu.Item>
          <Menu.Item
            name='s3Event'
            active={activeItem === 's3Event'}
            onClick={this.handleItemClick}
            >
            S3 Event
          </Menu.Item>
          <Menu.Item
            name='apiGateway'
            active={activeItem === 'apiGateway'}
            onClick={this.handleItemClick}
            >
            API Gateway
          </Menu.Item>
          <Menu.Item position='right'>
            <Link to='/demo'>Demo</Link>
          </Menu.Item>
        </Menu>
        {this.getSectionContent()}
      </div>
    );
  }
}

export default SectionMenu;
