const Burger = ({ isMenuOpen, toggleOpenMenu }) => {
    const cls = ['fas'];
    if (isMenuOpen) {
        cls.push('fa-arrow-alt-circle-right');}
             else {
        cls.push('fa-arrow-alt-circle-left');
    }
    return (
        <div className={isMenuOpen ?"burgerMenu" : "burgerMenu close"}>
            <i className={cls.join(' ')} onClick={toggleOpenMenu}></i>
        </div>
    )
}

export default Burger;