import React from 'react';
import { connect } from 'react-redux'; 
import classes from './Posts.module.css';
import Posts from './Posts';
import nanoid from 'nanoid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addPost, getPosts, editPost, finishEditingPost, removePost, rollBackPosts } from '../../../redux/actions/postAction';
import { dbRef } from '../../../config';

class PostsBoard extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentVal: '',
    }
  }
// Sending a value 
  sendPost = e => {
    const { currentVal } = this.state;
    if(currentVal !== '') {
     dbRef.add({
        msg: currentVal,
        id: nanoid(5),
      })
      this.setState({ currentVal: '' })
    } else {
      alert('Enter a message');
      }
    }
// Editing post
  handleFinishEditingPost = ({id, val}) => {
    this.props.finishEditingPost({id, val})
    dbRef.doc(id).set({ msg: val })
      .catch(() => this.props.rollBackPosts());
  }
  
// Removing post
  handleRemovingPost = id => {
    this.props.removePost(id);
    dbRef.doc(id).delete()
      .catch(() => this.props.rollBackPosts())
  }

  componentDidMount() {
    dbRef.get()
      .then(snap => {
        const result = [];
        snap.forEach(doc => result.push({...doc.data(), id: doc.id}));
        this.props.getPosts(result)
    })
  }
  
// Rendering the Posts component, input and button
    render() {
      const { currentVal } = this.state;
      const { posts } = this.props;
      return (
        <div>
          <TextField
            className={classes.postsTextArea}
            value={currentVal}
            onChange={(el) => this.setState({ currentVal: el.target.value })}
            type="text"
            label="Tell your news"
          />
          <Button
            variant="contained" 
            color="primary"
            onClick={() => {
              this.sendPost()
              this.props.addPost(currentVal)
              }}>
            Send
          </Button>
          <Posts 
            onRemovePost={this.handleRemovingPost}
            onEditPost={this.props.editPost}
            onFinishEditingPost={this.handleFinishEditingPost}
            posts={posts}
          />
        </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    posts: state.post.postList
  }
}

const mapDispatchToProps = {
  addPost, getPosts, editPost, finishEditingPost, removePost, rollBackPosts
};

export default connect (
  mapStateToProps, 
  mapDispatchToProps)
  (PostsBoard);
