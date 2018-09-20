import React from 'react';
import CounterWrapper from './CounterWrapper';
import P from '../../components/P';
import HR from '../../components/HR';
import CenterCounterWrapper from './CenterCounterWrapper';


export default class Counter extends React.Component {
    constructor(props) {
        super(props)

    this.state = {
            leftDisabled: false,
            rightDisabled: false,
            value: this.props.initialValue || 0
        }
    }
        
    _increment = () => {
        
        const newValue = this.state.value + 1;
        const d =  this._isDisabled(newValue, true);

        this.setState({
            rightDisabled: d,
            leftDisabled: false,
            value: newValue
            
        });

        console.log(this.state)
    };

    _isDisabled = (newValue, isIncrement) => {
        if (isIncrement) {
            return newValue === 10 ? true : false;
        }
        return newValue === -10 ? true : false;
        //return (this.state.value + 1  === 10 || this.state.value -1 === -10)  ? true : false
    }
    
    _decrement = () => {

        const newValue = this.state.value - 1;
        const d =  this._isDisabled(newValue, false);

        this.setState({
            leftDisabled: d,
            rightDisabled: false,
            value: newValue
            
        });

        console.log(this.state)
    };

    _reachedLimit = (value) => {
         return value === 10 ? `You reached the top! GO BACK!`: 
        ( value === -10 ? `You hit rock bottom! GO UP! `:'Up or down?')
    };



    render() {
        
        return(
            <CenterCounterWrapper>
                <CounterWrapper>
                    <HR/>
                    <P>{this.state.value}</P>
                    <button onClick= {this._decrement} disabled = {this.state.leftDisabled}>-</button>
                    <button onClick= {this._increment} disabled = {this.state.rightDisabled}>+</button>
                    <P>{this._reachedLimit(this.state.value)}</P>

                </CounterWrapper>
            </CenterCounterWrapper>

        );
    };

 } 