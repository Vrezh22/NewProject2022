import React from "react";
import nkar from "../../images/react.svg"
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
const Navbar = ({ navbarItems, toggleOpenAside, history ,width, isMenuOpen}) => {
    const isAuth = JSON.parse(localStorage.getItem('isAuth'))
    const showNavbarItems = navbarItems.map(item => {
        if (!isAuth && (item.name === 'Posts' || item.name === 'Friends' || item.name === 'Calculator')) {
            return null
        }
      else {
            return (
                <li className="nav_item" key={item.id}>
                    <NavLink to={item.link} exact activeClassName="activeClassNamer" >{item.name}</NavLink>
                </li>
            )
        }
    })
    let logout = () => {
        localStorage.setItem('isAuth', JSON.stringify(false));
        localStorage.setItem('activeUser', JSON.stringify(null));
        history.push('/login')
    }
    const cls = ["navbar"];
    if (width <= 1024) {
        if (isMenuOpen)
            cls.push("mobile");
        else {
            cls.push("mobile close");
        }
    }
return (
    <nav className={cls.join(' ')}>
        <div className="logoLine" onClick={toggleOpenAside}>
            <img src={nkar} alt="nkar" />
        </div>
        <ul className="navbar_nav">
            {showNavbarItems}
            <button className={isAuth?"logoutBtn":'logoutHidden'}onClick={logout}>Logout</button>
        </ul>
    </nav>
)
}
export default withRouter(Navbar);