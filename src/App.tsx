import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Offers } from "./pages/Offers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ofertas" element={<Offers />} />
    </Routes>
  );
}

export default App;
