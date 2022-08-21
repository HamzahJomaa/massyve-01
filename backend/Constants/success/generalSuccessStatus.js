const GeneralSuccessStatus = {
  RECEIVED_SUCCESSFULLY:{code: 200, message: "Received Successfully" },
  ADDED_SUCCESSFULLY: { code: 200, message: "Added Successfully" },
  UPDATED_SUCCESSFULLY: { code: 203, message: "Updated Successfully" },
  DELETED_SUCCESSFULLY: { code: 200, message: "Deleted Successfully" },
  DATA_RETRIEVED_SUCCESSFULLY: { code: 200, message: "Data Retrieved Successfully" },
  NO_DATA: { code: 204, message: "No Data" },
  ORDER_PLACED: { code: 200, message: "Order Placed Successfully" },
};

module.exports = {
  GeneralSuccessStatus,
};
