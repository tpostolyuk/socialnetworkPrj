// import React, { Component } from 'react';
// import classes from './Auth.module.css';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import * as firebase from 'firebase';

// export default class Auth extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        email: '',
//        password: ''
//     }
//   }
  
//   componentDidMount() {
//     const auth = firebase.auth();
//     auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
//       .then(cred => console.log(cred))
//       .catch(err => console.log(err));
//   }

//   render() {
//     return (
//       <div className={classes.authContainer}>
//         <form className={classes.signUpForm}>
//           <TextField 
//             required 
//             id="standard-required" 
//             label="Email"
//             onChange={e => this.setState({ email: e.target.value })}
//           />
//           <TextField
//             required
//             id="standard-required"
//             label="Password"
//             onChange={e => this.setState({ password: e.target.value })}
//           />
//           <Button variant="contained" color="default" type="submit">Submit</Button>
//         </form>
//       </div>
//     )
//   }
// }
