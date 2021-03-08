import React from "react";
import FollowersAndFollowingItem from "./followersandfollowingitem/FollowersAndFollowingItem.jsx";

const FollowersAndFollowingList = ({ followersorfollowinglist }) => (
  <div className="repoListContainer">
    {followersorfollowinglist.map(person => (
      <FollowersAndFollowingItem person={person} />
    ))}
  </div>
);

export default FollowersAndFollowingList;