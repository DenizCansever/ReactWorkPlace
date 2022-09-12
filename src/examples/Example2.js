/**************************************************************************************************************
 * Only difference between this example and the Example1 is Decoration component that used on Counter component.
 * In this example, decoration is a just component in Counter Component. It doesn't depend on state as count.
 * But it re-renders! Interesting... ---> So there are 2 things that we should understand <---
 **************************************************************************************************************
 * 1- When a component re-renders, it tries to re-render all descendants,
 * regardless of whether they're being passed a particular state variable through props or not. But why?
 * ---> Here's the answer: it's hard for React to know, with 100% certainty,
 * whether <Decoration> depends, directly or indirectly, on the count state variable. <---
 **************************************************************************************************************
 * 2- Our <BigCountNumber> component isn't re-rendering because the count prop changed.
 * When a component re-renders, because one of its state variables has been updated,
 * that re-render will cascade all the way down the tree, in order for React to
 * fill in the details of this new sketch, to capture a new snapshot.
 * ---> So, PROPS HAVE NOTHING TO DO WITH RE-RENDERS! <---
 **************************************************************************************************************/

import React from "react";

function Example2() {
  return (
    <>
      <header>
        <h4>
          Example2 || Will a component re-render because its props change? Hint:
          Tricky
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
      {/* 👇 This fella is new 👇 */}
      <Decoration />
    </main>
  );
}

/**This is the new  */
function Decoration() {
  return <div className='decoration'>💔</div>;
}

function BigCountNumber({ count }) {
  return (
    <p>
      <span className='prefix'>Count:</span>
      {count}
    </p>
  );
}

export default Example2;
