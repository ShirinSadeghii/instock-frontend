import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import "./App.scss";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Warehouses />}></Route>
        <Route path="/details" element={<WarehouseDetails />}></Route>
        <Route path="/details/add" element={<AddWarehousePage />}></Route>
        <Route path="/details/edit" element={<EditWarehouse />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
