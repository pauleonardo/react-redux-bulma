import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as viewListActions from '../actions/listActions';

import List from './list';

class viewListContainer extends Component{
  constructor(props,context){
    super(props)
  }
  async componentWillMount(){
    await this.props.actions.fetchList();
  }
  render(){
    return(
      <section className="section" style={{ overflow: 'hidden' }}>
        <div className="columns">
          <div className="column is-one-third">
              <List elements={this.props.list}/>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state){
  return{
    loading:state.viewList.loading,
    error: state.viewList.error,
    list: state.viewList.list
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(viewListActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(viewListContainer);
