import Navbar from '../components/Navbar';
import Burger from '../components/Burger';
const Mobile = ({
    data,
    toggleOpenAside,
    isMenuOpen,
    toggleOpenMenu,
    width
}) => {
  
    return (
        <div>
             <h1>Mobile Version</h1>
            <Navbar navbarItems={data.navbarItems} toggleOpenAside={toggleOpenAside} isMenuOpen={isMenuOpen} width={width} />
            <Burger isMenuOpen={isMenuOpen} toggleOpenMenu={toggleOpenMenu} />
           
        </div>
    )
}

export default Mobile;