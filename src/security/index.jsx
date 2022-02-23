import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
    let isAuth = JSON.parse(localStorage.getItem('isAuth'))
    if (isAuth) {
        return <Route render={props.render} {...props} />
    }
    else {
        return <Redirect to='/login' from='*' />
    }
}
export default PrivateRoute;