import { type AlertInterface } from "./AlertProvider";
import { AlertStatus, AlertMsg, AlertDesc } from "../constants/alertEnums";
import { createContext, useContext } from "react";

export const AlertContext = createContext<{
  alertState: AlertInterface;
  setAlertState: (alertState: AlertInterface) => void;
}>({
  alertState: {
    show: false,
    status: AlertStatus.success,
    msg: AlertMsg.successMsg,
    description: AlertDesc.successMsgDesc,
  },
  setAlertState: () => {},
});
export const useAlert = () => {
  return useContext(AlertContext);
};
