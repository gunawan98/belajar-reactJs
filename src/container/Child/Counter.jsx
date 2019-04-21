import React, {Component} from 'react';
import {GlobalConsumer} from '../../context/context';

class Counter extends Component { 
  render(){
    console.log(this);
    return(
      <div>
        <button onClick={()=> this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
        <input type="text" value={this.props.state.totalOrder} readOnly />
        <button onClick={()=> this.props.dispatch({type: 'PLUS_ORDER'})}>+</button>
      </div>     
      
    )
  }
  
}

export default GlobalConsumer(Counter);