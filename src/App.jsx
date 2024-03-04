import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Frontpage } from "./pages/Frontpage/Frontpage.jsx"
import { MainLayout } from "./Layout/MainLayout.jsx";

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Frontpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
