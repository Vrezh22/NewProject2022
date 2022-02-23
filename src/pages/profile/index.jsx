import React from 'react';
import style from './profile.module.css';

let Profile = () => {
    let activeUser = JSON.parse(localStorage.getItem('activeUser'))
    return (
        <div className={style.profile}>
            <div className={style.imgLine}>
                <img src={activeUser.avatar} alt='img' />
            </div>
            <div className={style.dataLine}>
                <h3>Signed Users name ` {activeUser.name} </h3>
                <p>Signed Users email ` {activeUser.email} </p>
            </div>
        </div>
    )
}
export default Profile;