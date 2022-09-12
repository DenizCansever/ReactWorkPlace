/**************************************************************************************************************
 * Now in terms of pure components, context is sorta like “invisible props”, or maybe “internal props”.
 * In this example, GreetUser is a pure component with no props, 
 * but it has an “invisible” or “internal” dependency: 
 * the user being stored in React state, and passed around through context.
 **************************************************************************************************************
 * If that user state variable changes, a re-render will occur, and GreetUser will generate a new snapshot, 
 * rather than relying on a stale picture. 
 * React can tell that this component is consuming this particular context, 
 * and so it treats it as if it was a prop.
 **************************************************************************************************************
 * Note that this only happens if the pure component consumes the context with the React.useContext hook. 
 * You don't have to worry about context breaking a bunch of pure components that don't try to consume it.
 **************************************************************************************************************/

import React from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    // Pretend that this is a network request,
    // fetching user data from the backend.
    window.setTimeout(() => {
      setUser({ name: 'Deniz' });
    }, 1000)
  }, [])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

function App() {
  return (
    <UserProvider>
      <GreetUser />
    </UserProvider>
  );
}

const GreetUser = React.memo(() => {
  const user = React.useContext(UserContext);

  if (!user) {
    return "Hi there!";
  }

  return `Hello ${user.name}!`;
});

export default App;