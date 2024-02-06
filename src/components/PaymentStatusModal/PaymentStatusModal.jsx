import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";

const PaymentStatusModal = ({ modalIsOpen = false, status = 1 }) => {
  const [isOpen, setIsOpen] = useState(modalIsOpen);

  const toggle = () => setIsOpen(false);

  return (
    <div>
      <Modal centered isOpen={isOpen} toggle={toggle}>
        <ModalBody className="text-center">
          <h3>{status == 1 ? "Payment Successfull" : "Oops!"}!</h3>
          <p>
            {status == 1
              ? "Order will be dispatched soon. Tracking details will be updated once shipper has dispatched your order."
              : "Payment failed. Please try again."}
          </p>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PaymentStatusModal;
