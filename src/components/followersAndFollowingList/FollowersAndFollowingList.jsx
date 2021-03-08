import React from "react";
import StarredItem from "./followersandfollowingitem/FollowersAndFollowingItem.jsx";

const FollowersAndFollowingList = ({ followersorfollowinglist }) => (
  <div className="repoListContainer">
    {followersorfollowinglist.map(person => (
      <StarredItem person={person} />
    ))}
  </div>
);

export default FollowersAndFollowingList;