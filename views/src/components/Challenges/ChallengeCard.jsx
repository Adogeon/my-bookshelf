import React from "react";
import { Link } from "react-router-dom";
import style from "./ChallengeCard.css";

const ChallengeCard = (props) => {
  return (
    <Link to={`/challenge/${props.challengeId}`} className={`${props.cName}`}>
      <div class={`${style.card}`}>
        <h1>{props.title}</h1>
      </div>
    </Link>
  );
};

export default ChallengeCard;
