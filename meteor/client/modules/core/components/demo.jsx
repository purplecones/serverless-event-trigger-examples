import React from 'react';
import Color from 'color';



class Demo extends React.Component {
  renderNodes() {
    return this.props.data.nodes.map((node, index) => {
      const baseColor = Color('#82adff');
      return (
        <div className="ui column" key={index}>
          <div className="node" style={
            {
              backgroundColor: baseColor.darken(node.nodeSize/100*.5).hexString(), // TODO
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
          <h1>Send SMS commands to 917 924 5262</h1>
        </div>
        <div className="ui column nodes">
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
