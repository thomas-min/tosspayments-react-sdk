# Toss Payments React SDK

[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

[Tosspayments JS SDK](https://docs.tosspayments.com/reference/js-sdk)를 react에 사용하기 위해 포팅한 라이브러리 입니다.

## Installation

```bash
# 일반 결제 패키지
yarn add @thomas-min/tosspayments-payment-react-sdk
# 결제위젯 패키지
yarn add @thomas-min/tosspayments-payment-widget-sdk
```

## Sample Usage

### 결제위젯

```tsx
import {
  PaymentWidgetProvider,
  PaymentMethodsSection,
  PaymentAgreementSection,
  PaymentRequestButton,
  usePaymentWidget,
} from "@thomas-min/tosspayments-payment-widget-react-sdk";

const amount = 15000;
const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "5eLhuP7cVYPuKdEB9LuVt";
const paymentRequestParameters = {
  orderId: "toty3r7YrBNBD3RgjHUInAmlXsFiTE",
  orderName: "토스 티셔츠 외 2건",
  customerEmail: "customer123@gmail.com",
  customerName: "김토스",
};

function PaymentWidgetExample() {
  return (
    <main
      style={{
        width: "30rem",
        backgroundColor: "white",
      }}
    >
      <PaymentWidgetProvider clientKey={clientKey} customerKey={customerKey}>
        <PaymentMethodsSection amount={amount} />
        <PaymentAgreementSection />
        <div style={{ padding: "1rem" }}>
          <PaymentRequestButton
            paymentRequestParameters={paymentRequestParameters}
            style={{
              color: "white",
              background: "#0064FF",
              border: "#0064FF",
              borderRadius: "0.25rem",
              padding: "0.5rem",
              width: "100%",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            결제하기
          </PaymentRequestButton>
        </div>
      </PaymentWidgetProvider>
    </main>
  );
}
```

## Documentation

- [Tosspayments JS SDK](https://docs.tosspayments.com/reference/js-sdk)
- [Tosspayments React SDK](https://thomas-min.github.io/tosspayments-react-sdk/)

## Working List

- 일반 결제
- 결제위젯 : WIP
