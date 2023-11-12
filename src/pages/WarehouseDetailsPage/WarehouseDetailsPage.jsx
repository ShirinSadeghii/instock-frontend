import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Warehouse from '../../components/Warehouse/Warehouse';
import { useParams } from "react-router-dom";
import '../../App.scss';

function WarehouseDetailsPage() {
    const itemId = useParams('1');
    return (
        <div className="warehouse-details">
            <Header />
            <div className="main">
                <Warehouse props={itemId} />
                <Footer />
            </div>
        </div>
    );
}
export default WarehouseDetailsPage;
