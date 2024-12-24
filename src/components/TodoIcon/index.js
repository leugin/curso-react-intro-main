import React from "react";
import { ReactComponent as DeleteSVG } from './delete.svg';
 const iconTypes = {
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
  };

 function TodoIcon ({
    type, color, onClick
 }){
    return (
        <span 
        className={`Icon-container Icon-container-${type}`}
        onClick = {onClick}
        >
        {iconTypes[type](color)}

        </span>
    )
 }

 export {TodoIcon}