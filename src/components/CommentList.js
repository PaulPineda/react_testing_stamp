import React, { Component, PropTypes } from 'react';

export default class CommentList extends Component {
  static propTypes = {
    onMount: PropTypes.func.isRequired,
    isActive: PropTypes.bool
  }

  componentDidMount(){
    this.props.onMount();
  }
  render(){
    return (
      <ul>
        <li>Comment One</li>
      </ul>
    );
  };
}
