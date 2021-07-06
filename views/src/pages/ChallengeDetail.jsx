import React from "react";
import { useParams } from "react-router-dom";

const ChallengeDetail = (props) => {
  const { challengeId } = useParams("challengeId");

  return <div>This is detail page for {challengeId}</div>;
};

export default ChallengeDetail;
