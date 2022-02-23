import React from "react";
import s from './friends.module.css';
import { Link } from 'react-router-dom'
import Preloader from "../../components/Preloader";
import * as axios from "axios"
import withScreenSizes from "../../HOC/withScreenSizes";
class Friends extends React.Component {
    state = {
        friends: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => {
                this.setState(prevState => ({
                    ...prevState,
                    friends: data
                }))
            })

    }

    render() {
      
        if (!this.state.friends.length) return <Preloader />
        const FriendsJSX = this.state.friends.map(friend => {
            return (
                <div className={s.friend} key={friend.id}>
                    <div className={s.friendImg}>
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
                    </div>
                    <div className={s.friendInfo}>
                        <p><Link to={'/friend/' + friend.id}>{friend.name}</Link></p>
                        <p>{friend.email}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className={s.friends}>
                <h1>FRIENDS PAGE</h1>
                <div className={s.friendWrapper}>
                    {FriendsJSX}
                </div>
            </div>
        )
    }
}
export default withScreenSizes(Friends);