import React from "react";

const StarredItem = ({ starred }) => (
  <a
    href={starred.html_url}
    key={starred.id}
    className="repoItemContainer"
    target="_blank"
  >
    <span>{starred.name}</span>
    <span>Repo: {starred.full_name}</span>
    <span>Owner: {starred.owner.login}</span>
    <span>Repo: {starred.description}</span>
    <span>Url by owner: {starred.owner.url}</span>
    <span>Url by repo: {starred.html_url}</span>
    <span>Url by repo2: {starred.url}</span>
  </a>
);

export default StarredItem;