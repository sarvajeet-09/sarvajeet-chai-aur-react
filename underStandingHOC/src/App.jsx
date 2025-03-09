import Dashboard from "./Dashboard"
import Auth from "./utils/Auth"



function App() {

  const Authentication = Auth(Dashboard)
  return (
    <>
     
      <Authentication name="sarvajeet singh" />
    </>
  )
}

export default App
