import React from "react";
import CircleAvatar from '../../circleavatar/CircleAvatar.jsx'

const FollowersAndFollowingItem = ({ person, urlImage }) => (
    <div>
        <CircleAvatar urlImage={person.avatar_url}></CircleAvatar>
        <a
            href={person.html_url}
            key={person.id}
            className="repoItemContainer"
            target="_blank"
        >
            <span>{person.login}</span>
           
        </a>
    </div>
);

export default FollowersAndFollowingItem;