import React from "react";
import "./Card.css"

// const Card = (props) => {
//     // console.log(props.children.props.className)
//     const classes = "card " + props.children.props.className;
//     // console.log(classes)
//     return <div className={classes}>{props.children}</div>;
// }

// export default Card;

const Card = (props) => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default Card;
