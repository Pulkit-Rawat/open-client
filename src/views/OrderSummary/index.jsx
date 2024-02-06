import { Card } from "reactstrap";

import PaymentStatusModal from "../../components/PaymentStatusModal/PaymentStatusModal";

const OrderSummary = () => {
  const params = new URLSearchParams(window.location.search);

  let pmtStatus = params.get("payment");

  return (
    <div className="w-100">
      <h3>Order Summary</h3>
      <Card className="m-1 p-1">
        <div className="d-flex">
          <p>Brand: </p>
          <p>APPLE</p>
        </div>
        <div className="d-flex">
          <p>Model: </p>
          <p>15 PRO</p>
        </div>
        <div className="d-flex">
          <p>Price: </p>
          <p>$2400</p>
        </div>

        <PaymentStatusModal
          modalIsOpen={pmtStatus ? true : false}
          status={pmtStatus}
        />
      </Card>
    </div>
  );
};

export default OrderSummary;
