import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './News.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addCard } from '../../redux/actions';
import Card from '../News/Card';
import { db } from '../../config';

class News extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
      dbData: {}
    }
  }
  getData = () => {
    const docRef = db.collection("posts").doc("post");
    docRef.get()
      .then(doc => doc.exists ? console.log('Data: ', doc.data()) : console.log('No such doc'))
      .catch(error => console.log("Error getting document:", error))
  
  }
  
  handleSubmit = e => {
    e.preventDefault();
    db.collection("posts").doc("post").set({
      title: this.state.title,
      content: this.state.content
    })
      .then(() => console.log("Document successfully written!"))
      .catch(error => console.error("Error writing document: ", error));
    this.getData();
  }
  
render() {
  const { title, content } = this.state;
  const { cards } = this.props;
  const card = cards.map(i => <Card key={i} textTitle={title} textContent={content} />)
  return (
    <div className={classes.newsWrapper}>
      <div className={classes.blockWrapper}>
         <form onSubmit={this.handleSubmit}>
          <TextField 
            id="outlined-basic"
            label="Title" 
            variant="outlined"
            onChange={e => this.setState({title: e.target.value})} />
          <TextField 
            id="outlined-basic" 
            label="Content" 
            variant="outlined"
            onChange={e => this.setState({content: e.target.value})} />
          <Button 
            type="submit"
            variant="contained" 
            color="secondary"
            onClick={() => this.props.addCard({ title, content })}>
            Add Card
          </Button>
        </form> 
      </div>
      <div>
        {card}
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.card.cardList
  }
}
const mapDispatchToProps = {
  addCard
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (News);