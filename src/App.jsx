

import { MediConnect } from "./AppNavigation/MediConnect"
import './App.css';
import { RootContext } from "./RootContext";


function App() {
 

  return (
    <>
      <RootContext>
        <MediConnect />
      </RootContext>
    </>
  )
}

export default App
