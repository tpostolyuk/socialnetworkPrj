import React from 'react';
import classes from './News.module.css'


class News extends React.Component {
  constructor(props) {
    super(props)
    this.sayHi = this.sayHi.bind(this);
    this.state = {
      message: 'Hello!'   
    }
  }  
  sayHi() {
    console.log('Hi ', this.state.message);
  }
render() {
  return (
    <div className = {classes.newsWrapper}>
      {this.state.message}
      <button onClick={this.sayHi}>Click</button>
    </div>
    );
  }
}

export default News;
