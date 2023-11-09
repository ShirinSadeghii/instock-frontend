import "../WarehouseList/warehouseList.scss";
import arrowRight from "../../assets/Icons/chevron_right-24px.svg";
import trashBin from "../../assets/Icons/delete_outline-24px.svg";
import pen from "../../assets/Icons/edit-24px.svg";
import dataJson from "../../data/data.json";
import lookingGlass from "../../assets/Icons/search-24px.svg";
import sortArrow from "../../assets/Icons/sort-24px.svg";
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
          <div className="warehouseListContainer__searchBarBox">
            <input
              className="warehouseListContainer__searchBar"
              placeholder="Search..."
            ></input>
            <img
              className="warehouseListContainer__lookingGlass"
              src={lookingGlass}
              alt="a looking glass icon"
            />
            <button className="warehouseListContainer__searchButton">
              + Add New Warehouse
            </button>
          </div>
          {/* <button className="warehouseListContainer__searchButton">
            +Add New Warehouse
          </button> */}
        </div>
        <div className="warehouseListContainer__tabletLeader">
          <p className="warehouseListContainer__tabletLeaderItem">
            WAREHOUSE{" "}
            <img
              className="warehouseListContainer__tabletLeaderArrow"
              src={sortArrow}
              alt="sort arrows"
            />
          </p>
          <p className="warehouseListContainer__tabletLeaderItem">
            ADDRESS
            <img
              className="warehouseListContainer__tabletLeaderArrow"
              src={sortArrow}
              alt="sort arrows"
            />
          </p>
          <p className="warehouseListContainer__tabletLeaderItem">
            CONTACT NAME
            <img
              className="warehouseListContainer__tabletLeaderArrow"
              src={sortArrow}
              alt="sort arrows"
            />
          </p>
          <p className="warehouseListContainer__tabletLeaderItem">
            CONTACT INFORMATION
            <img
              className="warehouseListContainer__tabletLeaderArrow"
              src={sortArrow}
              alt="sort arrows"
            />
          </p>
          <p className="warehouseListContainer__tabletLeaderItem">ACTIONS</p>
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
                    <img
                      className="warehouseListContainer__arrowLogo"
                      src={arrowRight}
                      alt="arrowRight"
                    />
                  </p>
                  <p className="warehouseListContainer__detailsTitle">
                    ADDRESS
                  </p>

                  <p className="warehouseListContainer__detailsInfo">
                    {info.address} {info.city}, {info.country}
                  </p>
                  <p className="warehouseListContainer__detailsInfo--altName">
                    {info.contact_name}
                  </p>
                  <span>
                    <img
                      className="warehouseListContainer__binIcon"
                      src={trashBin}
                      alt="trashbin"
                    />
                  </span>
                </div>
                <div className="warehouseListContainer__detailsBox--right">
                  <p className="warehouseListContainer__detailsTitle">
                    CONTACT NAME
                  </p>
                  <p className="warehouseListContainer__detailsInfo--Name">
                    {info.contact_name}
                  </p>
                  <p className="warehouseListContainer__detailsTitle">
                    CONTACT INFORMATION
                  </p>
                  <p className="warehouseListContainer__detailsInfo">
                    {info.contact_phone} {info.contact_email}
                  </p>

                  <span className="warehouseListContainer__penIcon--box">
                    <img
                      className="warehouseListContainer__binIconTablet"
                      src={trashBin}
                      alt="trashbin"
                    />
                    <img
                      className="warehouseListContainer__penIcon"
                      src={pen}
                      alt="editPen"
                    />
                  </span>
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
