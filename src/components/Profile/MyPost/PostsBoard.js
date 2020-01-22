import React from 'react';
import classes from './Posts.module.css';
import Posts from './Posts';

export default class PostBoard extends React.Component {
  constructor(props) {
    super(props)
    this.sendPost = this.sendPost.bind(this);

    this.state = {
      list : []
    }
  }

  // Sending a value to list state 

    sendPost() {
      let val = document.getElementById('inpt').value;
      if(val !== '') {
      this.setState({
        list: [...this.state.list, {msg: val}]
      })
      } else {
        alert('Enter a message');
      }
    }
    
// Rendering the Posts component, input and button

    render() {
        return (
            <div>
                <input id="inpt" className={classes.postsInput} type="text" title="your news..."/>
                <div className = {classes.btn} onClick = {this.sendPost}>Send</div>
                <Posts />
            </div>
            );
    }
}
