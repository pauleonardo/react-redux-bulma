import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as detailActions from '../actions/detailActions';
import Card from '../common/card';


class CardUserContainer extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <Card />
      </div>
    )
  }
}

function mapStateToProps(state){

}

function mapDispatchToProps(dispatch){

}

export default connect()(CardUserContainer);
