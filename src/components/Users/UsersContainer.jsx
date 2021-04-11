import React from "react";
import styles from './Users.module.css'
import {connect} from "react-redux";
import {
  follow, getUsers,
  setCurrentPage,
  toggleFollowingProgress,
  unfollow
} from "../../redux/users-reduser";
import Users from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {compose} from "redux";
import {usersAPI} from "../../API/api";
import {withAuthRedirect} from "../../Hoc/AuthRedirect";


class UsersContainer extends React.Component {
  componentDidMount() {
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize);

    /*   this.props.toggleIsFetching(true)

       usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

         this.props.setUsers(data.items);
         this.props.setUsersTotalCount(data.totalCount);
         this.props.toggleIsFetching(false)
       });*/
  }

  onPageChanged = (pageNumber) => {
    usersAPI.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}

      <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
             currentPge={this.props.currentPage} onPageChanged={this.onPageChanged} users={this.props.users}
             follow={this.props.follow} unfollow={this.props.unfollow}/>
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
  }
}
/*

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    }
  }
}
*/


export default compose(
/*  withAuthRedirect,*/
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
  })(UsersContainer))

