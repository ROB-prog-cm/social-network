import styles from './Profile.module.css'
import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../API/api";
import * as Redirect from "react-router-dom";
import {withAuthRedirect} from '../../Hoc/AuthRedirect'
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId)
  }

  render() {

    console.log(this.state)

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});


export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)

