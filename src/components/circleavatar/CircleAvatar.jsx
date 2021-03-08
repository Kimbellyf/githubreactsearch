import React from "react";
import './CircleAvatar.css';

const CircleAvatar = ({ urlImage }) => (
  <div>
      <div className="circle">
        <img src={urlImage} alt="Foto" className="circle img"/>
      </div>
  </div>
);

export default CircleAvatar;