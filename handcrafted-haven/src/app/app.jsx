import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/page.tsx";
import Artisans from "@/artisans/page.tsx";
import Shop from "@/shop/page.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/artisans" element={<Artisans />} />
      </Routes>
    </BrowserRouter>
  );
}
