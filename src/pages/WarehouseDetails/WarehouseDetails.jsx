import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Warehouse from '../../components/Warehouse/Warehouse';
import '../../App.scss';

function WarehouseDetails() {
    return (
        <div className="warehouse-details">
            <Header />
            <div className="main">
                <Warehouse />
                <Footer />
            </div>
        </div>
    );
}
export default WarehouseDetails;
