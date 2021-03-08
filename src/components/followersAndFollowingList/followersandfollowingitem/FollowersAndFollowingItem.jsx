import React from "react";
import CircleAvatar from '../../circleavatar/CircleAvatar.jsx'

const FollowersAndFollowingItem = ({ person }) => (
    <div>
        <CircleAvatar></CircleAvatar>
        <a
            href={person.html_url}
            key={person.id}
            className="repoItemContainer"
            target="_blank"
        >
            <span>{person.name}</span>
            <span>Repo: {person.full_name}</span>
            <span>Owner: {person.owner.login}</span>
            <span>Repo: {person.description}</span>
            <span>Url by owner: {person.owner.url}</span>
            <span>Url by repo: {person.html_url}</span>
            <span>Url by repo2: {person.url}</span>
        </a>
    </div>
);

export default FollowersAndFollowingItem;