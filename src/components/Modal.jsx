import React from "react";
import { Modal as BootstrapModal } from "react-bootstrap";

export const Modal = ({ onClose, showModal, children }) => {
  return (
    <>
    { showModal && 

      <BootstrapModal show={showModal} onHide={onClose} centered>
        <BootstrapModal.Header closeButton className="bg-primary text-white d-flex justify-content-between align-items-center">
          <BootstrapModal.Title>Todo</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          {children}
        </BootstrapModal.Body>
      </BootstrapModal>
      }
    </>
  );
};
