import { TossPaymentsInstance } from "@tosspayments/payment-sdk";
import { createContext } from "react";

export const PaymentsContext = createContext<TossPaymentsInstance | undefined>(
  undefined,
);
