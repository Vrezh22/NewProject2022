import React from 'react';
import Minus from "./minus";
import Plus from "./plus";
import Result from './result';
import style from './calc.module.css'

class Calc extends React.Component {
    state = {
        count: 0
    }
    render() {
        return (
            <div className={style.calcul}>
                <Minus minusCount={this.minusCount}/>
                <Plus plusCount={this.plusCount} />
                <Result result={this.state.count}/>
            </div>
        )
    }
    minusCount=() =>{
        this.setState({
            count:this.state.count-1
        })
    }
    plusCount=() =>{
        this.setState({
            count:this.state.count+1
        })
    }
}
export default Calc;