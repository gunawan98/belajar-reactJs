import React from 'react';
import Counter from './Counter';
import {GlobalConsumer} from '../../context/context';

class Child extends React.Component {
  

  render() {
    return(
      <div>
        <p>Counter: {this.props.state.totalOrder}</p>
        <hr />

        <Counter />
      </div>

    )
  }
}

export default GlobalConsumer(Child);