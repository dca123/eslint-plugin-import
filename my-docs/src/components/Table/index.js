import React from "react";

const Table = ({ data }) => {
  return (
    <table>
      <tr>
        <th>Rule</th>
        <th>Error</th>
        <th>Warning</th>
      </tr>
      {Object.entries(data).map(([rule, setting]) => (
        <tr>
          <td>{rule}</td>
          <td>{setting === "error" ? "✅" : "-"}</td>
          <td>{setting === "warn" ? "✅" : "-"}</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
