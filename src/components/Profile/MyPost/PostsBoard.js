import React from 'react';
import classes from './Posts.module.css';
import Posts from './Posts';
import nanoid from 'nanoid';

export default class PostBoard extends React.Component {
  constructor(props) {
    super(props);

    this.sendPost = this.sendPost.bind(this);
    this.removePost = this.removePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.confirmEdit = this.confirmEdit.bind(this);

    this.state = {
      list : [
      {id: nanoid(5), msg: "Hey!"}
      ],
      isEdited: false
    }
    this.myRef = React.createRef();
  }
// Sending a value to list state 

  sendPost() {
    let val = this.myRef.current.value;
    if(val !== '') {
      this.setState({
      list: [...this.state.list, {id: nanoid(5), msg: val}]
    })
    this.myRef.current.value = '';
    } else {
      alert('Enter a message');
      }
    }

  editPost(id) {
    this.setState({
      isEdited: true
    }) 
  }

  confirmEdit() {
    this.setState({
      isEdited: false,

    })
  }

  removePost(id) {
    const arr = this.state.list.filter(el => el.id !== id);
    this.setState({
      list: arr
    })
  }


// Rendering the Posts component, input and button
    render() {
      return (
        <div>
          <input ref = {this.myRef} className={classes.postsInput} type="text" title="your news..."/>
          <div className={classes.btn} onClick={this.sendPost}>Send</div>
          <Posts onChange={(id) => this.setState(state => {
            return {
              list: [state.list.some(item => item.id === id)]
            };
          })} rmvPost={this.removePost} listItem={this.state.list} isEdited={this.state.isEdited} editPost={this.editPost} confirmEdit={this.confirmEdit} />
        </div>
      );
    }
}
