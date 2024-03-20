import { createPortal } from "react-dom";

export const Modal = ({ onClose, showModal, children }) => {
  return (
    <>
      {showModal &&
        createPortal(
          <div className="modal modal-backdrop show" style={{ display: "block" }} tabIndex="-1" aria-hidden ="true">
            <div className="modal-dialog modal-dialog-centered" style={{ minWidth: "300px", maxWidth: "600px" }}>
              <div className="modal-content" style={{ minHeight: "300px" }}>
                <div className="modal-header d-flex justify-content-between align-items-center">
                  <h3 className="mb-0">Todo</h3>
                  <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                </div>
                <div className="modal-body">
                  {children}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
