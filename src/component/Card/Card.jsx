import React,{Fragment} from 'react';
import './Card.css';

import {connect} from 'react-redux';


class Card extends React.Component{
  render() {
    return(
      <Fragment>
        <div className="App-card">
          <p className="card-title">Deddy Sujarwadi</p>
          <p>Project Manager</p>
        </div>

        <hr />
        <p>Total Order: {this.props.order}</p>

      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder
  }
}

export default connect(mapStateToProps)(Card);