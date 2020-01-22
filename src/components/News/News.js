import React from 'react';
import classes from './News.module.css'


class News extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: true
    }
    this.updateState = this.updateState.bind(this);
  }
  updateState() {

    this.setState({
      isToggleOn: !this.state.isToggleOn
    })
  }
  render() {
    return (
        <div className = {classes.newsWrapper}>
            News
          <button onClick = {this.updateState}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        </div>
    );
  }
}

export default News;
