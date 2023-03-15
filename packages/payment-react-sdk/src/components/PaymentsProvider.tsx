import React from "react";
import {
  loadTossPayments,
  TossPaymentsInstance,
} from "@tosspayments/payment-sdk";
import { ReactNode, useEffect, useRef } from "react";
import { PaymentsContext } from "../contexts";

export const PaymentsProvider: React.FC<{
  children: ReactNode;
  clientKey: string;
}> = ({ children, clientKey }) => {
  const tosspaymentsRef = useRef<TossPaymentsInstance | undefined>();

  useEffect(() => {
    loadTossPayments(clientKey).then(
      (tosspayments) => (tosspaymentsRef.current = tosspayments),
    );
  }, [clientKey]);

  return (
    <PaymentsContext.Provider value={tosspaymentsRef.current}>
      {children}
    </PaymentsContext.Provider>
  );
};
