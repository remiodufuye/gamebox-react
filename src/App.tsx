import {useEffect, useRef } from "react";

function App() {

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {

  });

  return (
    <div>
      <input ref = {ref} type="text" className="form-control" />
    </div>
  )
}

export default App;
