import { BrowserRouter, Routes, Route } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import Warehouses from "./pages/Warehouses/Warehouses";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import "./App.scss";
import EditWarehousePage from "./pages/EditWarehousePage/EditwarehousePage";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";

function App() {
  return (
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Warehouses />}></Route>
          <Route path="/details" element={<WarehouseDetails />}></Route>
          <Route path="/details/add" element={<AddWarehousePage />}></Route>
          <Route path="/details/edit" element={<EditWarehousePage />}></Route>
          <Route path="/inventory" element={<InventoryPage />}></Route>
          <Route path="/add-inventory" element={<AddInventoryPage />}></Route>
          <Route path="/edit-inventory" element={<EditInventoryPage />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
