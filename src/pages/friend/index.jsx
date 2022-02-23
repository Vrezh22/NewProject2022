import React from 'react';
import { withRouter } from 'react-router-dom';
import style from './friend.module.css';
import Preloader from '../../components/Preloader';
import * as axios from 'axios';

class Friend extends React.Component {
    state = {
        friend: {}
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        (async () => {
            try {
                const response = await axios('https://jsonplaceholder.typicode.com/users/' + id);
                const friend = response.data;
                this.setState(prevState => ({
                    ...prevState,
                    friend
                }))
            }
            catch (err) {
                this.props.history.push('/')
            }
        })()
    }
    render() {
        if (!Object.keys(this.state.friend).length) return <Preloader />;
        return(
            <div className={style.obshi}>
                <h1>FRIEND PAGE</h1>
                <div className={style.friend}>
                    <div className={style.friendAvatar}>
                        <img src="https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg" alt="Userr" />
                    </div>
                    <div className={style.friendInfo}>
                        <p>Users Name `{this.state.friend.name}</p>
                        <p>Users Email `{this.state.friend.email}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Friend);