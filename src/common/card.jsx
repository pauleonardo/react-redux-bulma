import React from 'react';

import uuid from 'uuid';

export default ({
  email,
  name
}) => (
  <div className="column is-4">
    <div className="card">
      <div className="card-image">
        <figure className="image is-square">
          <img src={`https://api.adorable.io/avatars/150/${uuid.v4()}${email}${name}.png`} alt="img"/>
        </figure>
      </div>
      <div className="card-content">
        <div className="content is-small">
          <h1 className="has-text-centered subtitle">
            <strong>{name}</strong>
          </h1>
          <p className="has-text-centered">
            <small  >{email}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
);
