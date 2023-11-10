import AddInventory from "../../components/AddInventory/AddInventory";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import '../../App.scss';

function AddInventoryPage() {
  return (
    <div className="warehouse-details">
      <Header />
      <div className="main">
        <AddInventory />
        <Footer />
      </div>
    </div>
  )
}
export default AddInventoryPage