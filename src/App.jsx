import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddWarehousePage from './pages/AddWarehousePage/AddWarehousePage';
import "./App.scss";

function App() {
  return (
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Warehouses />}></Route>
          <Route path="/details" element={<WarehouseDetailsPage />}></Route>
          <Route path="/details/add" element={<AddWarehousePage />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
