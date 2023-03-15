import { useContext } from "react";
import { PaymentsContext } from "../contexts";

export const usePayments = () => {
  const tosspayments = useContext(PaymentsContext);

  return tosspayments;
};
