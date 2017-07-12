import React from 'react';
import uuid from 'uuid';

const isActive = {
  background: "#00d1b2"
}
export default ({
  elements,
  action,
  idDetail
}) => (
  <nav className="panel">
    <p className="panel-heading"> Menu Items </p>
    {
      elements.map( (element) => (
        <a
          className={`panel-block ${ ( idDetail === element.id) && ('is-active') }`}
          style={  ( idDetail === element.id) ? isActive : {} }
          key={uuid.v4()}

          onClick={() => action(element)}
          >
            <span className="panel-icon">
              {
                ( element.users ) ? (
                  <i
                    className="fa fa-circle"
                    style={{ color: 'yellow'}}
                    ></i>
                ) :
                (
                  <i
                    className="fa fa-circle"
                    style={{ color: 'green'}}
                    ></i>
                )
              }
            </span>
              {element.name}
        </a>
      ))
    }
  </nav>
)
