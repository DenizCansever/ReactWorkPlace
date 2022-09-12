/** So, we understand that, When a component re-renders, because one of its state variables has been updated,
 * that re-render will cascade all the way down the tree, in order for React
 * to fill in the details of this new sketch, to capture a new snapshot.
 * *****************************************************************************
 * A sneakier version of this problem has to do with refs. 
 * If we pass a ref as a prop, React won't be able to tell whether or 
 * not we've mutated it since the last render. And so it chooses to re-render, 
 * to be on the safe side.
 * *****************************************************************************
 * Then one of the solution is make the component pure. Why do we need that?
 * By wrapping our Decoration component with React.memo, we're telling React
 * “Hey, I know that this component is pure. You don't need to re-render it unless its props change.”
 * ---> This uses a technique known as memoization. <---
 * The idea is that React will remember the previous snapshot.
 * If none of the props have changed,
 * React will re-use that stale snapshot rather than going through the trouble of generating a brand new one.
 * 
 * You might be wondering: why isn't this the default behaviour?? 
 * If a component has a bunch of props and not a lot of descendants, 
 * it can actually be slower to check if any of the props have changed compared to re-rendering the component.
 * it would be counter-productive to memoize every single component we create. 
 * React is designed to capture these snapshots really quickly! 
 * But in specific circumstances, for components with a lot of descendants 
 * or components that do a ton of internal work, this helper can help quite a bit.
 */

import React from "react";

function Example3() {
  return (
    <>
      <header>
        <h4>
          Example3 || How can I fix the re-render of decoration component in
          Example2? Hint: Make it pure! Memoization
        </h4>
      </header>
      <Counter />
      <footer>
        <p>Copyright 2022 Big Count Inc.</p>
      </footer>
    </>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <main>
      <BigCountNumber count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* 👇 This fella is pure component now 👇 */}
      <Decoration />
    </main>
  );
}

const Decoration = React.memo(function Decoration() {
  return <div className='decoration'>💔</div>;
});

const BigCountNumber = React.memo(function BigCountNumber({ count }) {
  return (
    <p>
      <span className='prefix'>Count:</span>
      {count}
    </p>
  );
});

export default Example3;
