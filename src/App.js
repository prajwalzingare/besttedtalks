import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [tedstoShow, settedsToShow] = useState("fiction");

  const tedsCollection = {
    Spiritual: [
      {
        name: "Building Resiliency Through Spirituality-Madison Jaye.",
        rating: "4/5"
      },
      {
        name: "How to find a spiritual connection-Radhanath Swami.",
        rating: "3.5/5"
      }
    ],
    fiction: [
      { name: "How fiction can change reality-Jessica Wise.", rating: "4.8/5" },
      { name: "The inspiring truth in fiction-Tomas Elemans. ", rating: "3.8/5" }
    ],
    Motivational: [
      {
        name: "The psychology of self-motivation-Scott Geller.",
        rating: "4.5/5"
      },
      {
        name: "How to Achieve Your Most Ambitious Goals-Stephen Duneier. ",
        rating: "4/5"
      }
    ]
  };

  var tedsCategory = Object.keys(tedsCollection);

  function handlebtnClick(type) {
    settedsToShow(type);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>🎙 best Tedtalk's</h1>
        <p>
          check out my favourite Tedtalks. Select a category to get started{" "}
        </p>
        {tedsCategory.map((category) => (
          <button className="button" onClick={() => handlebtnClick(category)}>
            {category}
          </button>
        ))}
        <hr />
        <ul style={{ listStyle: "none" }}>
          {tedsCollection[tedstoShow].map((ted) => (
            <li>
              <div className="list-div">
                {ted.name}
                <div style={{ fontSize: "smaller" }}>{ted.rating}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
