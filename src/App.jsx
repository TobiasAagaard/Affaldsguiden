import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Frontpage } from "./pages/Frontpage/Frontpage.jsx"

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Frontpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
