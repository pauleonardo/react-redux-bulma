import React from 'react';
import uuid from 'uuid';

export default ({
  elements
}) => (
  <nav className="panel">
    <p className="panel-heading"> Menu Items </p>
    {
      elements.map( (element) => (
        <a className="panel-block">
            <span className="panel-icon">
              {
                ( element.users ) ? (
                  <i className="fa fa-circle" style={{ color: 'yellow'}}></i>
                ) :
                (
                  <i className="fa fa-circle" style={{ color: 'green'}}></i>
                )
              }
            </span>
              {element.name}
        </a>
      ))
    }
  </nav>
)
