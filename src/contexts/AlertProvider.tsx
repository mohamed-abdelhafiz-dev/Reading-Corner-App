import { useState } from "react";
import { AlertContext } from "./AlertContext";
import type { ReactNode } from "react";
import { AlertStatus,AlertMsg,AlertDesc} from '../constants/alertEnums'
export interface AlertInterface {
  show: boolean;
  status: AlertStatus;
  msg: AlertMsg;
  description: AlertDesc;
}

export default function AlertProvider({ children }: { children: ReactNode }) {
  const [alertState, setAlertState] = useState<AlertInterface>({
    show: false,
    status: AlertStatus.success,
    msg: AlertMsg.successMsg,
    description: AlertDesc.successMsgDesc,
  });
  return (
    <AlertContext.Provider value={{ alertState, setAlertState }}>
      {children}
    </AlertContext.Provider>
  );
}
