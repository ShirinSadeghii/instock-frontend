import Header from "../../components/Header/Header";
import NewWarehouse from "../../components/NewWarehouse/NewWarehouse";
import Footer from "../../components/Footer/Footer";
import "../../App.scss";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";

function EditWarehousePage() {
  return (
    <div className="warehouse-details">
      <Header />
      <div className="main">
        <EditWarehouse />
        <Footer />
      </div>
    </div>
  );
}

export default EditWarehousePage;
