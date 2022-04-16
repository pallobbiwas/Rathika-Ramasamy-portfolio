import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function ActiveLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ color: match ? "rgb(184, 141, 88)" : "whitesmoke" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default ActiveLink;
