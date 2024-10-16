import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // If modal is not open, don't render it

  // Close the modal if clicking on the overlay (but not on the modal content itself)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button> {/* Close button inside the modal */}
        {children} {/* Display the modal content */}
      </div>
    </div>
  );
};

export default Modal;
