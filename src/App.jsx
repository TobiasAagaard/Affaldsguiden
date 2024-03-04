import "./App.scss"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Frontpage } from "./pages/Frontpage/Frontpage.jsx"
import { MainLayout } from "./Layout/MainLayout.jsx";
import { NotFound } from "./pages/NotFound/NotFound.jsx";

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Frontpage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
