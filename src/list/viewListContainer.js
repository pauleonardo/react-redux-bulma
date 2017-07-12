import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';

import * as viewListActions from '../actions/listActions';
import * as detailActions from '../actions/detailActions';

import List from './list';
import Card from '../common/card';

class viewListContainer extends Component{
  constructor(props,context){
    super(props)
    this.handleSelect = this.handleSelect.bind(this);
    this.showUsers = this.showUsers.bind(this);
    this.handleSelectNext = this.handleSelectNext.bind(this);
    this.handleSelectPrevious = this.handleSelectPrevious.bind(this);
  }
  async componentWillMount(){
    await this.props.actions.fetchList();
  }
  handleSelect(item){
    this.props.actionsDetail.selectItem(item)
  }
  handleSelectNext(){

    const searchItem = (elem) => elem.id === this.props.detail.id;
    const index = this.props.list.findIndex(searchItem);
    let item = {};

    if( typeof this.props.list[index+1] !== 'undefined' ){
      item = this.props.list[index+1]
    }
    else {
      item = this.props.list[0];
    }

    this.props.actionsDetail.selectNextItem(item);

  }
  handleSelectPrevious(){

    const searchItem = (elem) => elem.id === this.props.detail.id;
    const index = this.props.list.findIndex(searchItem);
    let item = {};

    if( typeof this.props.list[index-1] !== 'undefined' ){
      item = this.props.list[index-1]
    }
    else {
      item = this.props.list[this.props.list.length -1 ];
    }

    this.props.actionsDetail.selectPreviousItem(item);

  }
  showUsers(){
    return this.props.users.map( (user) => (
      <Card
         key={uuid.v4()}
        {...user}
      />
    ))
  }
  render(){
    return(
      <section className="section" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
                <List
                  elements={this.props.list}
                  action={this.handleSelect}
                  idDetail={this.props.detail.id}
                />
            </div>
            <div className="column is-two-thirds" >
                <nav className="pagination">
                  <a className="pagination-previous" onClick={this.handleSelectPrevious}>Previous</a>
                  <a className="pagination-next" onClick={this.handleSelectNext}>Next</a>
                </nav>
                <div className="columns is-multiline">
                  {
                    (this.props.detail.id) &&
                    (<Card {...this.props.detail}/>)
                  }
                  {
                    (this.props.users) && ( this.showUsers() )
                  }
                </div>
            </div>
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
    list: state.viewList.list,
    detail: {
      id: state.viewDetail.id,
      name: state.viewDetail.name,
      email: state.viewDetail.email
    },
    users: state.viewDetail.users
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(viewListActions,dispatch),
    actionsDetail: bindActionCreators(detailActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(viewListContainer);
