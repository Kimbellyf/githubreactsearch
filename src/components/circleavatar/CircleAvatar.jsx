import React from "react";

const CircleAvatar = ({ urlImage }) => (
  <div>
      <div class="circle">
        <img src={urlImage} alt="Foto"/>
      </div>
  </div>
);

export default CircleAvatar;