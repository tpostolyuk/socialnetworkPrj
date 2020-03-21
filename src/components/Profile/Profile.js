import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Profile.module.css';
import Description from './ProfileDescription/profileDescription';
import PostsBoard from './MyPost/PostsBoard';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/actions/userAction';
import { withRouter } from 'react-router-dom';

export class Profile extends Component {
  state = {
    isLoad: false
  }

  componentDidMount() {
    let userId = this.props.match.params.userId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then(response => {
      this.props.setUserProfile(response.data)
      this.setState({ isLoad: true });
    })
    .catch(e => console.log(e.message));
  }

  render() {
    return (
      <main className={classes.content}>
        <Description isLoad={this.state.isLoad} profileInfo={this.props.profileInfo} />
        <PostsBoard />
      </main>
    )
  }
}


const mapStateToProps = state => ({
  profileInfo: state.user.profile
});

const WithUrlDataContainerComponent = withRouter(Profile);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)




