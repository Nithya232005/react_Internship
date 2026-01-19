import React from "react";

function withLoading(Component) {
  return function ({ isLoading, ...props }) {
    if (isLoading) {
      return <p className="loading">Loading app...</p>;
    }

    return <Component {...props} />;
  };
}

export default withLoading;
