/** In this example, we have 3 components: App at the top, which renders Counter, which renders BigCountNumber.
 *  We have a single piece of state, count, which is associated with the Counter component.
 *  Whenever this state changes, Counter re-renders.
 *  And because BigCountNumber is being rendered by Counter, it too will re-render.
 *  ****************************************************************
 *  As you can see, all app doesn't render. Also Header and Footer don't re-render.
 *  This is because, only Counter Component re-renders due to Count state changing.
 *  So It effects only itself and its descendants (if any) (RULE #3)
 */

import React from "react";

function Example1() {
  return (
    <>
      <header>
        <h4>
          Example1 || Does the entire app re-render whenever a state variable
          changes? Hint: NOPE!
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
    </main>
  );
}

function BigCountNumber({ count }) {
  return (
    <p>
      <span className='prefix'>Count:</span>
      {count}
    </p>
  );
}

export default Example1;
