import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EditInventory from '../../components/EditInventory/EditInventory';
import '../../App.scss';


function EditInventoryPage() {
  const {itemId} = useParams('1');
  return (
    <div className="warehouse-details">
    <Header />
    <div className="main">
      <EditInventory itemId={itemId} />
      <Footer />
    </div>
  </div>
  )
}
export default EditInventoryPage