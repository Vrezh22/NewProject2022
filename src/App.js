import React from 'react'
import Web from './versions/Web'
import Mobile from './versions/Mobile'
import withScreenSizes from './HOC/withScreenSizes'
const data = {
   navbarItems: [{
      id: 1,
      name: 'Home',
      link: '/home'
   },
   {
      id: 2,
      name: 'About',
      link: '/about'
   },
   {
      id: 3,
      name: 'Contact Us',
      link: '/contactUs'
   },
   {
      id: 4,
      name: 'Login',
      link: '/login'
   },
   {
      id: 5,
      name: 'Registration',
      link: '/registration'
   },
   {
      id: 6,
      name: 'Posts',
      link: '/posts'
   },
   {
      id: 7,
      name: 'Friends',
      link: '/friends'
   },
   {
      id: 8,
      name: 'Profile',
      link: '/profile'
   },
      // {
      //    id: 9,
      //    name: 'Calculator',
      //    link: '/calc'
      // }
   ],
}
class App extends React.Component {
   state = {
      isOpen: false,
      isOpenImg: false,
      isMenuOpen: true
   }
   render() {
      const { width } = this.props
      if (width <= 1024) {
         return (
            <Mobile
               data={data}
               toggleOpenAside={this.toggleOpenAside}
               state={this.state}
               toggleOpenAboutImg={this.toggleOpenAboutImg}
               isMenuOpen={this.state.isMenuOpen}
               toggleOpenMenu={this.toggleOpenMenu}
               width={width} />
         )
      }
      else {
         return (
            <Web
               data={data}
               toggleOpenAside={this.toggleOpenAside}
               state={this.state}
               toggleOpenAboutImg={this.toggleOpenAboutImg}
               width={width}
            />
         )
      }
   }
   toggleOpenAside = () => {
      this.setState({ isOpen: !this.state.isOpen })
   }
   toggleOpenAboutImg = () => {
      this.setState((state) => ({
         ...state,
         isOpenImg: !state.isOpenImg
      }))
   }
   toggleOpenMenu = () => {
      this.setState(prevState => ({
         ...prevState,
         isMenuOpen: !this.state.isMenuOpen
      }))
   }
}
export default withScreenSizes(App);