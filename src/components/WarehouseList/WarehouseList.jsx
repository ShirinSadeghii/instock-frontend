import "../WarehouseList/warehouseList.scss";

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
            <p>WAREHOUSE</p>
            <p>Manhattan</p>
            <p>ADDRESS</p>
            <p>503 Broadway, New York, USA</p>
            <img></img>
          </div>
          <div className="warehouseListContainer__detailsBox--right">
            <p>CONTACT NAME</p>
            <p>CONTACT INFORMATION</p>
            <p>+1(629)555-0129</p>
            <p>paujla@instock.com</p>
            <img></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default WarehouseList;
