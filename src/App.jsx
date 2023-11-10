import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddWarehousePage from './pages/AddWarehousePage/AddWarehousePage';
import "./App.scss";
import AddInventory from "./components/AddInventory/AddInventory";
import EditInventory from "./components/EditInventory/EditInventory";

function App() {
  return (
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Warehouses />}></Route>
          <Route path="/details" element={<WarehouseDetails />}></Route>
          <Route path="/details/add" element={<AddWarehousePage />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/add-inventory" element={<AddInventory />}></Route>
          <Route path="/edit-inventory" element={<EditInventory />}></Route>
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
