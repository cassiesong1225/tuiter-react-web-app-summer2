import React from "react";
import TuitItem from "./TuitItem";
import { connect } from "react-redux";

const TuitList = ({ tuits }) => {
  return (
    <ul className="list-group">
      {tuits.map((tuit) => (
        <li key={tuit._id} className="list-group-item">
          <TuitItem tuit={tuit} />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return { tuits: state.tuits.tuits };
};

export default connect(mapStateToProps)(TuitList);
