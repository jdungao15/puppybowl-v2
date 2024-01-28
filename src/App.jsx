// App.js

import "./App.css";
import Nav from "../components/Nav/Nav";
import { puppyList } from "./data";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const showPuppyDetailsHandler = (puppyId) => {
    setFeatPupId(puppyId);
  };

  return (
    <>
      <h1>PuppyBowl</h1>
      {puppies.map((puppy) => (
        <div>
          <div
            key={puppy.id}
            className={`puppy-card ${featPupId === puppy.id ? "selected" : ""}`}
          >
            <h1 onClick={() => showPuppyDetailsHandler(puppy.id)}>
              Name: {puppy.name}
            </h1>
            {featPupId === puppy.id && (
              <div className="details">
                <p>Email: {puppy.email}</p>
                <p>Cute: {puppy.isCute ? "Yes" : "Maybe"}</p>
                <p>Age: {puppy.age}</p>
                <p>OwnerID: {puppy.ownerId}</p>
                <p>
                  Tricks
                  <ul>
                    {puppy.tricks.map((trick) => (
                      <li key={trick.id}>{trick.title}</li>
                    ))}
                  </ul>
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
