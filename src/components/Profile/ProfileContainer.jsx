import styles from './Profile.module.css'
import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus,} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from '../../Hoc/AuthRedirect'
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.userId;
    if (!userId) {
      userId = 1;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {

    console.log(this.state)

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                 updateStatus={this.props.updateStatus}/>
      </div>
    )
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});


export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)

