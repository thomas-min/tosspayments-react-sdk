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

const onAgreementChange = (e) => console.log(e);
const onSuccess = (e) => console.log(e);
const onFail = (e) => console.log(e);

function PaymentWidgetExample() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        border: "1px solid  lightgray",
        backgroundColor: "#f6f8fa",
        borderColor: "#f6f8fa",
        borderRadius: "0.25rem",
      }}
    >
      <main
        style={{
          width: "30rem",
          backgroundColor: "white",
          borderRadius: "0.5rem",
          padding: "1rem",
          margin: "1rem",
        }}
      >
        <PaymentWidgetProvider clientKey={clientKey} customerKey={customerKey}>
          <PaymentMethodsSection amount={amount} />
          <PaymentAgreementSection onAgreementChange={onAgreementChange} />
          <div style={{ padding: "1rem" }}>
            <EnableDiscount />
            <PaymentRequestButton
              onSuccess={onSuccess}
              onFail={onFail}
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
    </div>
  );
}

function EnableDiscount() {
  const { paymentMethodsRef } = usePaymentWidget();

  const handleChange = (e) => {
    if (e.target.checked) {
      paymentMethodsRef.current?.updateAmount(amount - 5000, "쿠폰");
    } else {
      paymentMethodsRef.current?.updateAmount(amount, "");
    }
  };

  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <input type="checkbox" id="is-coupon-enabled" onChange={handleChange} />
      <label htmlFor="is-coupon-enabled">5000원 할인하기</label>
    </div>
  );
}

export default PaymentWidgetExample;
