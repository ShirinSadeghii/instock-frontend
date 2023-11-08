import "../WarehouseList/warehouseList.scss";
import arrowRight from "../../assets/Icons/chevron_right-24px.svg";
import trashBin from "../../assets/Icons/delete_outline-24px.svg";
import pen from "../../assets/Icons/edit-24px.svg";
import dataJson from "../../data/data.json";
function WareHouseListDetail({ info }) {
  return (
    <li>
      <h2>{info.warehouse_name}</h2>
    </li>
  );
}
function WarehouseList() {
  // const dataJson
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
        <ul className="warehouseListContainer__detailsBox">
          {dataJson.map((info, index) => {
            return (
              <li
                key={index}
                className="warehouseListContainer__detailsBox--list"
              >
                <div className="warehouseListContainer__detailsBox--left">
                  <p className="warehouseListContainer__detailsTitle">
                    WAREHOUSE
                  </p>
                  <p className="warehouseListContainer__detailsInfo--alt">
                    {info.warehouse_name}
                    <img src={arrowRight} alt="arrowRight" />
                  </p>
                  <p className="warehouseListContainer__detailsTitle">
                    ADDRESS
                  </p>

                  <p className="warehouseListContainer__detailsInfo">
                    {info.address} {info.city}, {info.country}
                    <img src={trashBin} alt="trashbin" />
                  </p>
                </div>
                <div className="warehouseListContainer__detailsBox--right">
                  <p className="warehouseListContainer__detailsTitle">
                    CONTACT NAME
                  </p>
                  <p className="warehouseListContainer__detailsTitle">
                    {info.contact_name} {info.contact_phone}
                  </p>
                  <p className="warehouseListContainer__detailsInfo">
                    {info.contact_email}
                    <img src={pen} alt="editPen" />
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        {/* <li>
            {dataJson.map((info, index) => {
              return <WareHouseListDetail key={index} info={info} />;
            })}
          </li>
          <li>
            <div className="warehouseListContainer__detailsBox--left">
              <p className="warehouseListContainer__detailsTitle">WAREHOUSE</p>
              <p className="warehouseListContainer__detailsInfo--alt">
                Manhattan <img src={arrowRight} alt="arrowRight" />
              </p>
              <p className="warehouseListContainer__detailsTitle">ADDRESS</p>
              <p className="warehouseListContainer__detailsInfo">
                503 Broadway, New York, USA
                <img src={trashBin} alt="trashbin" />
              </p>
              
              <img></img>
            </div> */}
        {/* <div className="warehouseListContainer__detailsBox--right">
              <p className="warehouseListContainer__detailsTitle">
                CONTACT NAME
              </p>
              <p className="warehouseListContainer__detailsTitle">
                CONTACT INFORMATION
              </p>
              <p className="warehouseListContainer__detailsInfo">
                +1(629)555-0129
              </p>
              <p className="warehouseListContainer__detailsInfo">
                paujla@instock.com
                <img src={pen} alt="editPen" />
              </p>
              <img></img>
            </div>
          </li>
        </ul> */}
      </div>
    </>
  );
}
export default WarehouseList;
