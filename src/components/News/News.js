import React from 'react';
import classes from './News.module.css'
import NewsChild from './NewsChild';


class News extends React.Component {
  constructor(props) {
    super(props)
    this.sayHi = this.sayHi.bind(this);
    this.state = {
      message: 'Hello!',
      isLogged: true
    }
  }  
  sayHi() {
    console.log('Hi ', this.state.message);
  }
render() {
  return (
    <div className = {classes.newsWrapper}>
      {/* <NewsChild greet={this.sayHi} /> */}
      {this.state.isLogged ? <div>Welcome back Taras!</div> : <div>Welcome guest!</div>}
    </div>
    );
  }
}

export default News;
