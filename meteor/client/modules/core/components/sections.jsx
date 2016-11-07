import React from 'react';
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
    let content = '';
    switch (this.state.activeItem) {
      case 'schedule':
        content = `functions:
  scheduledEvent:
    handler: handler.scheduledEvent
    events:
      - schedule: rate(1 minute)`;
        break;
      case 's3Event':
        content = `functions:
  s3Event:
    handler: handler.s3Event
    events:
      - s3: my-unique-bucket`;
        break;
      case 'apiGateway':
        content = `functions:
  apiGatewayEvent:
    handler: handler.apiGatewayEvent
    events:
      - http:
          path: events/create
          method: post`
        break;
    }
    return (
      <pre className="codeblock">
        <code className="code">{content}</code>
      </pre>
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
        </Menu>
        {this.getSectionContent()}
      </div>
    );
  }
}

export default SectionMenu;
