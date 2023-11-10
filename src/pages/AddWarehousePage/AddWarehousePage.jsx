import Header from "../../components/Header/Header";
import NewWarehouse from '../../components/NewWarehouse/NewWarehouse';
import Footer from "../../components/Footer/Footer";
import '../../App.scss';


function AddWarehouse() {
    return (
        <div className="warehouse-details">
            <Header />
            <div className="main">
                <NewWarehouse />
                <Footer />
            </div>
        </div>
    );
}


export default AddWarehouse;