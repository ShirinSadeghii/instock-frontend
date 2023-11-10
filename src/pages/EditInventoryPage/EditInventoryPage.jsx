import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EditInventory from '../../components/EditInventory/EditInventory';
import '../../App.scss';


function EditInventoryPage() {
  return (
    <div className="warehouse-details">
    <Header />
    <div className="main">
      <EditInventory />
      <Footer />
    </div>
  </div>
  )
}
export default EditInventoryPage