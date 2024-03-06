import "./App.scss"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout.jsx";
import { Frontpage } from "./pages/Frontpage/Frontpage.jsx"
import { Sortering } from "./pages/Sortering/Sortering.jsx"
import { NotFound } from "./pages/NotFound/NotFound.jsx";
import { SorteringDetails } from "./pages/Sortering/SorteringDetails/SorteringDetails.jsx";

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Frontpage />} />
          <Route path="/sortering" element={<Sortering />} />
          <Route path="sortering/:id" element={<SorteringDetails />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
