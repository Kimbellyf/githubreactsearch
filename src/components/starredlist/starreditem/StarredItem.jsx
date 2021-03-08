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
    <span>Dono: {starred.owner.login}</span>
    <span>Descrição: {starred.description}</span>
  </a>
);

export default StarredItem;