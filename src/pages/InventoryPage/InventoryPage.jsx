import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../App.scss";
import Inventory from "../../components/Inventory/Inventory";
import modal from "./modal";
import Modal from "../../components/Warehouse/modal";

function InventoryPage() {
  return (
    <div className="warehouse-details">
      <Header />
      <div className="main">
        <Inventory />
        <Footer />
        <Modal />
      </div>
    </div>
  );
}
export default InventoryPage;
