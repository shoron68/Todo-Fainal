import Demo from "./components/Demo"
import Login from "./components/Login"
import Reg from "./components/Reg"
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"

function App() {
let router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route index element={<Reg/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/kire" element={<Demo/>}></Route>
    
  </Route>
))


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
