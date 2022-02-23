import React from "react";

const Aside =({isOpen})=>{
    return(
    <div className={isOpen? 'aside':'asideClose'}>

    </div>
    )
}
export default Aside;