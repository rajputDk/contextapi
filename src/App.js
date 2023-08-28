import React, { createContext } from 'react'
import Home from './components/Home'
const FirstName = createContext();
const LastName = createContext()
function App() {
  return (
    <div>
      <FirstName.Provider value={"deepak singh"}>
        <LastName.Provider value={"rajput"}>
          <Home />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  )
}

export default App;
export { FirstName, LastName }