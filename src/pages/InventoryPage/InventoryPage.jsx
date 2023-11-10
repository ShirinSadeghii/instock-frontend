import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../App.scss";
import Inventory from "../../components/Inventory/Inventory"

function InventoryPage() {
  return (
    <div className="warehouse-details">
    <Header />
    <div className="main">
      <Inventory />
      <Footer />
    </div>
  </div>
  )
}
export default InventoryPage