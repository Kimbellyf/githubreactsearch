import React from "react";
import StarredItem from "./starreditem/StarredItem.jsx";

const StarredList = ({ starreds }) => (
  <div className="repoListContainer">
    {starreds.map(starred => (
      <StarredItem starred={starred} />
    ))}
  </div>
);

export default StarredList;