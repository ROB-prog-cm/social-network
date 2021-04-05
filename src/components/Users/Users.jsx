import React from "react";
import styles from "./Users.module.css";
import photo from "../../assets/images/free-icon-delivery-courier-4108808.svg";


const Users = (props)=>{

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return(
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
              <img src={u.photos.small != null ? u.photos.small : photo} className={styles.photo} alt="1"/>
            </div>
            <div>
              {u.followed
                ?
                <button onClick={() => {
                  props.unfollow(u.id)
                }}>Unfollow</button>
                :
                <button onClick={() => {
                  props.follow(u.id)
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