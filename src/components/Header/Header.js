import React, { Component } from 'react';
import classes from './Header.module.css';
import logo from './logo.png';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import * as firebase from 'firebase';


class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       nickName: 'Guest'
    }
  }
  componentDidMount() {
    let docRef = firebase.firestore().collection("nickname").doc("Name");
    docRef.get().then(doc => {
      doc.exists ? this.setState({nickName: doc.data().name}) : console.log('No such docs');
    })
    .catch(err => console.log(err.status, err.message));
  }
    
  render() {
   return (
      <header className={classes.header}>
       <div>
          <div className={classes.headerLogo}>
            <img src={logo} alt="site-logo"/>
         </div>
       </div>

       <div className={classes.headerText}>
          <h1>my little blog</h1>
        </div>
        <h1>{`Welcome ${ this.state.nickName } !`}</h1>
        <NavLink to="/auth"><Button 
            variant="contained"
            color="primary"
            onClick={this.props.onAuthSignOut}
          >Log Out</Button>
        </NavLink> 
      </header>
      );
    }
  }

export default Header;