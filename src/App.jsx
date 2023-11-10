import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import Warehouses from "./pages/Warehouses/Warehouses";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import "./App.scss";

function App() {
  return (
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Warehouses />}></Route>
          <Route path="/details" element={<WarehouseDetails />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>

          

          <Route path="/inventory/:itemId" element={<InventoryDetails/>}></Route>
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
