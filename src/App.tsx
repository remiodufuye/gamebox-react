import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Miami", "Los Angeles", "San Francisco"];

  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={() => console.log("Clicked Item")}
      />
    </div>
  );
}

export default App;
