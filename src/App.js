import React from 'react';
import { render } from 'react-dom'
import SearchParams from './SearchParams'

const App = () => {
  // return React.createElement(
  //   "div",
  //   {},
  //   [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese"}),
  //     React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockatiel"}),
  //     React.createElement(Pet, { name: "Puss in Boots", animal: "Cat", breed: "Mixed"})
  //   ]);

  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Molly" animal="Dog" breed="Poodle" /> */}
    </div>
  );
}

render(<App />, document.getElementById("root"));