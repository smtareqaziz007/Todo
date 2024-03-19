import React from "react"
import { createPortal } from "react-dom"

export const Modal = ({ onClose, showModal, children }) => {
  return (
    <>
      {showModal &&
        createPortal(
          <div id="myModal" className="">
            <div className="">
              <button onClick={onClose}>
                <span className="">&times;</span>
              </button>
              {children}
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
