import * as React from "react";
import PropTypes from "prop-types";


const SimplePage = ({ children, title, subtitle }) => {

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <div className="mb-6">
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                { title }
              </h1>
              <h2 className="subtitle">
                { subtitle }
              </h2>
            </div>
            { children }
          </div>
        </div>
      </div>
    </div>
  )
};

SimplePage.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};


export default SimplePage;
