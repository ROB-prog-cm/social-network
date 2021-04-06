import React from "react";
import styles from "./Users.module.css";
import photo from "../../assets/images/free-icon-delivery-courier-4108808.svg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  console.log(pages)
  return (
    <div>
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p && styles.selected}
                       onClick={(e) => {
                         props.onPageChanged(p);
                       }}>{p}</span>
        })}

      </div>

      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
         <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : photo} className={styles.photo} alt="1"/>
              </NavLink>
            </div>
            <div>
              {u.followed
                ?
                <button onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "fa1aadd0-aa94-4bdf-b467-d4424d399080"
                    }
                  }).then(response => {
                    if (
                      response.data.resultCode === 0
                    ) {
                      props.unfollow(u.id)
                    }

                  });
                }}>Unfollow</button>
                :
                <button onClick={() => {

                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      "API-KEY": "fa1aadd0-aa94-4bdf-b467-d4424d399080"
                    }
                  }).then(response => {
                    if (
                      response.data.resultCode === 0
                    ) {
                      props.unfollow(u.id)
                    }
                  });

                }}>Follow</button>}
                </div>
                </span>
          <span>
                <span>
                <div>{u.name}</div>
                <div>{u.status}</div></span>
                <span>
               {/* <div>{u.location}</div>
                <div>{u.country}</div>*/}
                </span>
                </span>
        </div>)
      }

    </div>
  )
}

export default Users;