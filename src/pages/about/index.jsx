import React from "react";
import { Link } from "react-router-dom";
import style from "./about.module.css"

class About extends React.Component {
    render() {
        return (
            <div className={style.aboutPage}>
                <h1>ABOUT PAGE</h1>
                <p>A guide book or travel guide is "a book of information about a place designed for the use of visitors or tourists".
                    It will usually include information about sights, accommodation, restaurants, transportation, and activities.
                    Maps of varying detail and historical and cultural information are often included.
                    Different kinds of guide books exist, focusing on different aspects of travel, from adventure travel to relaxation,
                    or aimed at travelers with different incomes, or focusing on sexual orientation or types of diet.
                    Travel guides can also take the form of travel websites.
                </p>

                <Link to="/contactUs">Go to contact Us page</Link>
                <div className={this.props.isOpenImg ? `${style.open}` : `${style.open} ${style.closed}`}>
                    <img src="https://i.gifer.com/7N1e.gif" alt="map" />
                </div>
                <button onClick={this.props.toggleOpenAboutImg} className={style.btn}>Map</button>
            </div >
        )
    }
}
export default About;