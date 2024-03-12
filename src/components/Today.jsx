import React from "react";
import classes from "./Today.module.css";
import Portrait from "./Portrait";

function Today({ data }) {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th colSpan={2} className={classes.character}>
            Character
          </th>
          <th colSpan={2} className={classes.material}>
            Material
          </th>
          <th className={classes.domain}>Domain</th>
        </tr>
      </thead>
      {data.map((rowObject) => (
        <tbody key={rowObject.name}>
          <tr>
            <td className={classes.portraitImg}>
              <Portrait name={rowObject.name} />
            </td>
            <td>{rowObject.dName}</td>
            <td className={classes.portraitImg}>
              <Portrait name={rowObject.matName} />
            </td>
            <td>{rowObject.mat}</td>
            <td>{rowObject.domain}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Today;
