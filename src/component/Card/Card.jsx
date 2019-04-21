import React,{Fragment} from 'react';
import './Card.css';
import { GlobalConsumer } from '../../context/context';

class Card extends React.Component{
  render() {
    return(
      <Fragment>
        <div className="App-card">
        <p className="card-title">Deddy Sujarwadi</p>
        <p>Project Manager</p>
        </div>

        <hr />
        <p>Total Order: {this.props.state.totalOrder}</p>

      </Fragment>
    )
  }
}

export default GlobalConsumer(Card);