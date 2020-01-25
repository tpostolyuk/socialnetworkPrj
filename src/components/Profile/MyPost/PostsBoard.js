import React from 'react';
import classes from './Posts.module.css';
import Posts from './Posts';

export default class PostBoard extends React.Component {
  constructor(props) {
    super(props);
    this.sendPost = this.sendPost.bind(this);
    this.removePost = this.removePost.bind(this);
    this.state = {
      list : [
      {id: 1, msg: "Hey!"},
      ]
    }
    this.myRef = React.createRef();
  }
  // Sending a value to list state 
    sendPost() {
      let val = this.myRef.current.value;
      if(val !== '') {
      this.setState({
        list: [...this.state.list, {msg: val}]
      })

      } else {
        alert('Enter a message');
      }
    }

    removePost() {
      
    }
// Rendering the Posts component, input and button
    render() {
        return (
            <div>
                <input ref = {this.myRef} className={classes.postsInput} type="text" title="your news..."/>
                <div className = {classes.btn} onClick = {this.sendPost}>Send</div>
                <Posts rmvPost = {this.removePost} listItem = {this.state.list} />
            </div>
            );
    }
}
