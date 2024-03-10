import React from "react";
import classes from "./Today.module.css";

function Today({ data }) {
  return (
    <div>
      <h1>Farmable Today</h1>
      <table className={classes.table}>
        <tr>
          <th>Character</th>
          <th>Material</th>
          <th>Domain</th>
        </tr>
        {data.map((rowObject) => (
          <tr key={rowObject.name}>
            <td>{rowObject.name}</td>
            <td>{rowObject.mat}</td>
            <td>{rowObject.domain}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Today;
