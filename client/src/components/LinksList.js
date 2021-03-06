import React from "react";
import { Link } from "react-router-dom";

export const LinksList = ({ links }) => {
  if (!links.length) {
    return <p className="center">You haven't created any links</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Original Link</th>
          <th>Short Link</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {links.map((link, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{link.from}</td>
              <td>{link.to}</td>
              <td>
                <Link to={`/detail/${link._id}`}>details</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
