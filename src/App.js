import React from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
import ComponentOne from "./components/ComponentOne";
import ComponentEffect from "./components/effect/ComponentEffect";

const App = () => {
  return (
    <div>
      {/* <Counter />
      <hr /> */}
      <Input />
      <ComponentOne />
      <ComponentEffect />
    </div>
  );
};

export default App;
