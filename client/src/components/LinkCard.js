import React from "react";

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link</h2>
      <p>
        Short Link:{" "}
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        Original Link:{" "}
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        Clicks on this Link: <strong>{link.clicks}</strong>
      </p>
      <p>
        Created: <strong>{new Date(link.date).toLocaleDateString("ru")}</strong>
      </p>
    </>
  );
};
