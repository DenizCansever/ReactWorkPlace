/* Important Understanding of Re-render: (I would call that RULES) 
1- React's “main job” is to keep the application UI in sync with the React state. 
  The point of a re-render is to figure out what needs to change.
2- Every re-render in React starts with a state change. 
3- When a component re-renders, it also re-renders all of its descendants (if any).
4- Data can't flow "up" in a React application.
5- Props have nothing to do with re-renders.
*/

import React from "react";
import { OnOneFile, Example1, Example2 } from "./examples";

function App() {
  return (
    <>
      <OnOneFile /> {/* State and logic on only one file.  */}
      <Example1 />
      {/* Is it true: The entire app re-renders whenever a state variable changes. Hint: NOPE! */}
      <Example2 />
      {/* Is it true: A component will re-render because its props change. Hint: It is tricky, isn't it?*/}
    </>
  );
}

export default App;
