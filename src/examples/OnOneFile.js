/**The entire OnOneFile re-renders whenever a state variable changes,
 * due to managing state on the file which contains all elements that are used which is bad practice.  */

import React from "react";

function OnOneFile() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <header>
        <h4>OnOneFile Example || State and Logic On Only One File</h4>
      </header>
      <main>
        <p>
          <span className='prefix'>Count:</span>
          {count}
        </p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </main>
      <footer>
        <p>Copyright 2022 Big Count Inc.</p>
      </footer>
    </>
  );
}

export default OnOneFile;
