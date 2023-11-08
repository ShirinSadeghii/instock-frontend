import "../WarehouseList/warehouseList.scss";
import arrowRight from "../../assets/Icons/chevron_right-24px.svg";

function WarehouseList() {
  return (
    <>
      <div className="warehouseListContainer">
        <div className="warehouseListContainer__titleBox">
          <h1 className="warehouseListContainer__title">Warehouses</h1>
          <input
            className="warehouseListContainer__searchBar"
            placeholder="Search..."
          ></input>
          <button className="warehouseListContainer__searchButton">
            +Add New Warehouse
          </button>
        </div>
        <div className="warehouseListContainer__detailsBox">
          <div className="warehouseListContainer__detailsBox--left">
            <p className="warehouseListContainer__detailsTitle">WAREHOUSE</p>
            <p className="warehouseListContainer__detailsInfo--alt">
              Manhattan <img src={arrowRight} alt="" />
            </p>
            <p className="warehouseListContainer__detailsTitle">ADDRESS</p>
            <p className="warehouseListContainer__detailsInfo">
              503 Broadway, New York, USA
            </p>
            <img></img>
          </div>
          <div className="warehouseListContainer__detailsBox--right">
            <p className="warehouseListContainer__detailsTitle">CONTACT NAME</p>
            <p className="warehouseListContainer__detailsTitle">
              CONTACT INFORMATION
            </p>
            <p className="warehouseListContainer__detailsInfo">
              +1(629)555-0129
            </p>
            <p className="warehouseListContainer__detailsInfo">
              paujla@instock.com
            </p>
            <img></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default WarehouseList;
