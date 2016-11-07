import React from 'react';

const nodes = [
  { nodeSize: 30, id: 1 },
  { nodeSize: 30, id: 2 },
  { nodeSize: 30, id: 3 },
  { nodeSize: 30, id: 4 },
  { nodeSize: 30, id: 5 },
  { nodeSize: 30, id: 6 },
  { nodeSize: 30, id: 7 },
  { nodeSize: 30, id: 8 },
  { nodeSize: 30, id: 9 },
  { nodeSize: 30, id: 10 },
  { nodeSize: 30, id: 11 },
  { nodeSize: 30, id: 12 },
  { nodeSize: 30, id: 13 },
  { nodeSize: 30, id: 14 },
  { nodeSize: 30, id: 15 },
  { nodeSize: 30, id: 16 },
  { nodeSize: 30, id: 17 },
  { nodeSize: 30, id: 18 },
  { nodeSize: 30, id: 19 },
  { nodeSize: 30, id: 20 },
];

class Demo extends React.Component {
  renderNodes() {
    return nodes.map((node, index) => {
      return (
        <div className="ui column" key={index}>
          <div className="node" style={
            {
              width: node.nodeSize,
              height: node.nodeSize,
            }}
          >
           <div className="label">
              {node.id}
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui one column grid container">
        <div className="ui column">
          <h1>AWS Lambda Event Triggers using Serverless</h1>
          <p>Below are a few working examples of how to use events to trigger your AWS Lambda functions using Serverless</p>
        </div>
        <div className="ui column">
          <div className="ui five column grid">
            {this.renderNodes()}
          </div>
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
  }
}

export default Demo;
