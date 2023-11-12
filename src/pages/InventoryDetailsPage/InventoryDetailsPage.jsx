import InventoryDetails from '../../components/InventoryDetails/InventoryDetails';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../App.scss";

function InventoryDetailsPage() {
  return (
    <div className="warehouse-details">
      <Header />
      <div className="main">
        <InventoryDetails />
        <Footer />
      </div>
    </div>
  )
}

export default InventoryDetailsPage
