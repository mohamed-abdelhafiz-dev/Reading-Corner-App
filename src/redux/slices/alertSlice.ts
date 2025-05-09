import { createSlice } from "@reduxjs/toolkit";
import { AlertDesc, AlertMsg, AlertStatus } from "../../constants/alertEnums";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    show: false,
    status: AlertStatus.success,
    msg: AlertMsg.successMsg,
    description: AlertDesc.successMsgDesc,
  },
  reducers: {
    setAlert: (_, action) => {
      return action.payload;
    },
  },
});
export default alertSlice.reducer;
export const { setAlert } = alertSlice.actions;
