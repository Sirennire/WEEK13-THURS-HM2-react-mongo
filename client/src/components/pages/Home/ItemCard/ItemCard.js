import React from "react";
import "./ItemCard.css";
import Comments from "../Comments/Comments";

const ItemCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li className="title-with-text">
          <strong><a href={'https://news.blizzard.com' + props.link}>{props.title}</a></strong>
        </li>
        <li className="block-with-text">
          <strong>{props.summary}</strong>
        </li>
        <li ><a className="comments" href="#">Comments (0)</a><span className="add-comment hoverable"><Comments /></span></li>
      </ul>

    </div>
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default ItemCard;
