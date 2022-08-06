import React, { useState } from "react";
import data from "./data.json";
import Review from "./Review";

const App = () => {
  const [getIndex, setIndex] = useState(2);
  const [getData, setData] = useState(data);
  let people = getData[getIndex];

  const checkNumber = (num) => {
    if (num >= getData.length) {
      return 0;
    }
    if (num < 0) {
      return getData.length - 1;
    }

    return num;
  };

  const nextReview = () => {
    setIndex((pre) => checkNumber(pre + 1));
    people = getData[getIndex];
  };

  const preReview = () => {
    setIndex((pre) => checkNumber(pre - 1));
    people = getData[getIndex];
  };

  const randomReview = () => {
    let random = Math.floor(Math.random() * getData.length);
    if (getIndex === random) {
      random += 1;
    }
    setIndex(checkNumber(random));
    people = getData[getIndex];
  };
  return (
    <main className="main">
      <h1 className="heading__primary">Our Reviews</h1>
      <div className="container">
        <Review
          data={people}
          next={nextReview}
          pre={preReview}
          ran={randomReview}
        ></Review>
      </div>
    </main>
  );
};

export default App;
