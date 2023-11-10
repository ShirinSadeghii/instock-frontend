import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Delete = () => {
  const { id: warehouseId } = useParams();

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://3.20.237.64:80/warehouses/${warehouseId}`
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <p>Warehouse ID: {warehouseId}</p>

      <button onClick={handleDelete}>Delete Warehouse</button>
    </div>
  );
};

export default Delete;
