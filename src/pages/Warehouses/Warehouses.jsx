import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import "../../App.scss";
function Warehouses() {
  return (
    <div className="warehouse-details">
      <Header />
      <div className="main">
        <WarehouseList />
        <Footer />
      </div>
    </div>
  );
}
export default Warehouses;
