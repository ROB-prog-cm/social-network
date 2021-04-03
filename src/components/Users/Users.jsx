import React from "react";
import styles from './Users.module.css'
import photo from "../../assets/images/free-icon-delivery-courier-4108808.svg";


const Users = (props) => {
  if (props.users.length === 0) {

    props.setUsers([
      {id: 1, photo: photo, followed: true, fullName: '2', status: '123', location: 'Minsc', country: '123'},
      {id: 2, photo: photo, followed: false, fullName: '1', status: '123', location: 'Minsc', country: '123'},
      {id: 3, photo: photo, followed: true, fullName: '3', status: '123', location: 'Minsc', country: '123'},
      {id: 4, photo: photo, followed: false, fullName: '4', status: '123', location: 'Minsc', country: '123'}
    ])
  }

  return (<div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photo} className={styles.photo} alt="1"/>
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
                <div>{u.fullName}</div>
                <div>{u.status}</div></span>
                <span>
                <div>{u.location}</div>
                <div>{u.country}</div></span>
                </span>
        </div>)
      }

    </div>

  )
}


export default Users