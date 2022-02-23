import React from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside"
import { Route, Redirect } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition"
import PrivateRoute from "../security";
import withSuspence from "../HOC/withSuspence";
import PostsContextProvider from "../context/provider/PostsContextProvider"
// pages
import Home from "../pages/home";
import About from "../pages/about";
import ContactUs from "../pages/contactUs"
import Login from "../pages/login"
import Registration from "../pages/registration"
import Posts from "../pages/posts";
import Friends from "../pages/friends";
import Friend from "../pages/friend";
import Profile from "../pages/profile";
const Calc = React.lazy(() => import('../pages/calc'));

const Web = ({ data, state, toggleOpenAside, toggleOpenAboutImg, width }) => {
    return (
        <div className="App">
            <Navbar navbarItems={data.navbarItems} toggleOpenAside={toggleOpenAside} width={width} />
            <Aside isOpen={state.isOpen} />
            <div className="App_content">
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="App_content"
                >
                    <Route path='/home' component ={Home}/>
                    <Route path="/about" render={() => <About isOpenImg={state.isOpenImg} toggleOpenAboutImg={toggleOpenAboutImg} />} />
                    <Route path="/contactUs" component={ContactUs} />
                    <Route path="/login" component={Login} />
                    <Route path="/registration" component={Registration} />
                    <PrivateRoute path="/friends">
                        <Friends />
                    </PrivateRoute>
                    <PrivateRoute path="/friend/:id">
                        <Friend />
                    </PrivateRoute>
                    <PrivateRoute path="/profile" >
                        <Profile />
                    </PrivateRoute>
                    <PrivateRoute path="/calc" >
                        {withSuspence(Calc)}
                    </PrivateRoute>
                    <PostsContextProvider>
                        <PrivateRoute
                            path="/posts"
                        />
                        <Posts />
                    </PostsContextProvider>
                    <Redirect from='*' to='/' />
                </AnimatedSwitch>
            </div>
        </div>
    )
}
export default Web;