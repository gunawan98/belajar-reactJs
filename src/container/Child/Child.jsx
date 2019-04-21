import React from 'react';
import Counter from './Counter';

import {connect} from 'react-redux';

class Child extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     order: 0
  //   }

  //   // this.handleMinus = this.handleMinus.bind(this)
  // }
    
  // handleCounterChange = (newValue) => {
  //   this.setState({
  //     order: newValue
  //   })
  // }

  render() {
    return(
      <div>
        <p>Counter: {this.props.order}</p>
        <hr />
        
        <Counter onCounterChange={(value)=> this.handleCounterChange(value)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder
  }
}

export default connect(mapStateToProps)(Child);