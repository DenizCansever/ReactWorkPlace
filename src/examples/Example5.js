/**
 * One of the things that you'll notice when you start using the profiler: sometimes, 
 * pure components re-render even when nothing appears to have changed!
 * One of the subtle mind-bending things about React is that components are JavaScript functions. 
 * When we render a component, we're calling the function.
 * This means that anything defined inside a React component is re-created on every single render.
 * 
 * very single time we render this App component, we're generating a brand new object. 
 * This can wreck havoc on our pure components; 
 * this DogProfile child is going to re-render whether or not we wrap it with React.memo!
 * 
 * ***** So how can we fix that? Using useMemo & useCallback
 * You can check the usememo-usecallback branch to see my code examples on one app.
 */

import React from "react";

function Example5() {
  const dog = {
    name: "Spot",
    breed: "Jack Russell Terrier",
  };
  return <DogProfile dog={dog} />;
}

const DogProfile = React.memo(({ dog }) => {
  return (
    <>
      <p>
        {dog.name} = {dog.breed}
      </p>
    </>
  );
});

export default Example5;
