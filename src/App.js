import HookCounter from "./components/HookCounter";
import './app.css'
import React from "react";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Parth'}>
        <ChannelContext.Provider value={'Makwana'}>
            <h2>Counter App </h2>
            <HookCounter/>
        </ChannelContext.Provider>   
      </UserContext.Provider>
    </div>
  );
}

export default App;
