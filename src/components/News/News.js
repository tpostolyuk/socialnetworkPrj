import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import classes from './News.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from './Card';
import { buyCake, buyIceCream } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

function Hooks() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Cakes - { numOfCakes } </h1>
      <h1>Number of IceCream - { numOfIceCream }</h1>
      <Button onClick={() => dispatch(buyCake())} variant="contained" color="primary">Buy Cake</Button>
      <Button onClick={() => dispatch(buyIceCream())} variant="contained" color="secondary">Buy IceCream</Button>
    </div>
  )
}

class News extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: '',
      content: ''   
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props)
    
  }

render() {
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
          color="secondary">
          Add an Item
        </Button>
      </form> 
      <Card />
      <Hooks />
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (News);