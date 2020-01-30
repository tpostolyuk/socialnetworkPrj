import React from 'react';
import classes from './News.module.css'


class News extends React.Component {
  constructor(props) {
    super(props)
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.state = {
     email: '' 
    }
  }
  changeEmailHandler(event) {
    this.setState({
      email: event.target.value
    })
  }
render() {
  return (
    <div className={classes.newsWrapper}>
      <input onChange={this.changeEmailHandler} />
      <h1>{this.state.email}</h1>
    </div>
    );
  }
}

export default News;
