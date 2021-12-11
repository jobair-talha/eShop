import React from "react";
import "./Title.css";

const Title = ({ titleName }) => {
  return (
    <div className="title mb-5">
      <h2 className="d-inline pb-2">{titleName}</h2>
    </div>
  );
};

export default Title;
