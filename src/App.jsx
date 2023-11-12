import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import Warehouses from "./pages/Warehouses/Warehouses";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import "./App.scss";
import EditWarehousePage from "./pages/EditWarehousePage/EditwarehousePage";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";

function App() {
  return (

    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Warehouses />}></Route>
          <Route path="/details/:itemId" element={<WarehouseDetailsPage />}></Route>
          <Route path="/details/add" element={<AddWarehousePage />}></Route>
          <Route path="/inventory/:itemId" element={<InventoryDetailsPage />}></Route>
          <Route path="/details/edit/:itemId" element={<EditWarehousePage />}></Route>
          <Route path="/inventory" element={<InventoryPage />}></Route>
          <Route path="/add-inventory" element={<AddInventoryPage />}></Route>
          <Route path="/edit-inventory/:itemId" element={<EditInventoryPage />}></Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
