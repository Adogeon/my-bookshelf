import React from "react";

import ChallengeCard from "../components/Challenges/ChallengeCard";

import row from "../styles/row.css";

const data = [
  {
    id: 5,
    title: "52 books in 52 weeks",
    description: "Start your reading goal by reading 1 book per weeks",
  },
  {
    id: 7,
    title: "Tolkien Jaunt",
    description: "Let take a walk in Tolkien country",
  },
];

const ChallengePage = () => {
  return (
    <>
      <div className={`${row.row}`}>
        {data.map((challenge) => (
          <ChallengeCard
            challengeId={challenge.id}
            title={challenge.title}
            cName={`${row["col-2"]}`}
          />
        ))}
      </div>
    </>
  );
};

export default ChallengePage;
