import React from 'react'
import styles from '../../modal.module.css'

const Modal = ({ closeModal, show, children }) => {
  const showHideClassName = show
    ? `${styles.modal} modal d-block`
    : `${styles.modal} modal d-none`;

  return (
    <div className={showHideClassName}>
      <div className={`modal-container ${styles.modal_container}`}>
        {children}
        <a href="#" className="modal-close" onClick={closeModal}>
          close
        </a>
      </div>
    </div>
  )
}

export default Modal