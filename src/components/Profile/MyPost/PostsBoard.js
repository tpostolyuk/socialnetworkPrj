import React from 'react';
import classes from './Posts.module.css';
import Posts from './Posts';
import nanoid from 'nanoid';

export default class PostBoard extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentVal: '',
      list: [
      {id: nanoid(5), msg: "Hey!", isEditing: false}
      ]
    }
  }
// Sending a value to list state 
  sendPost = () => {
    const { currentVal } = this.state;

    if(currentVal !== '') {
      this.setState({
        list: [...this.state.list, {id: nanoid(5), msg: currentVal, isEditing: false}]
      });
      this.setState({ currentVal: '' })
    } else {
      alert('Enter a message');
      }
    }

  confirmEdit = (val) => {
    this.setState({
      list: [{isEditing: true}]
    })

    if(val !== '') {
      this.setState({
        list: [{msg: val, isEditing: false}]
      })  
    } else {
      alert('Enter edited message!');
    }
    
  }

  removePost = (id) => {
    const arr = this.state.list.filter(el => el.id !== id);
    this.setState({
      list: arr
    })
  }

  handleEditingConfirmation = ({ id, msg }) => {
    this.setState(prevState => {
      return {
        list: prevState.list.map(item => item.id === id ? ({ ...item, msg, isEditing: false }) : item)
      };
    })
  }


// Rendering the Posts component, input and button
    render() {
      return (
        <div>
          <textarea
            className={classes.postsTextArea}
            value={this.state.currentVal}
            onChange={(el) => this.setState({ currentVal: el.target.value })}
            type="text"
            title="your news..."
          />
          <div className={classes.btn} onClick={this.sendPost}>Send</div>
          <Posts onChange={(id) => this.setState(state => {
              return {
                list: [state.list.some(item => item.id === id)]
              };
            })}
            rmvPost={this.removePost}
            listItem={this.state.list}
            onEdit={(id) => this.setState(prevState => {
              return {
                list: prevState.list.map(item => id === item.id ? { ...item, isEditing: true } : item)
              };
            })}
            onConfirmEditing={this.handleEditingConfirmation}
          />
        </div>
      );
    }
}
