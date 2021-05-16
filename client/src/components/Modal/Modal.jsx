import React from 'react'
import styles from './modal.module.css'

const Modal = ({ closeModal, show, children }) => {
  const showHideClassName = show
    ? `${styles.modal} modal d-block`
    : `${styles.modal} modal d-none`;

  return (
    <div className={`shadow-lg ${showHideClassName}`}>
      <div className={`modal-container ${styles.modal_container} shadow-lg`}>
        {children}
        <a className={styles.modal_close} onClick={closeModal}>
          <span className="iconify" data-icon="carbon:close" data-inline="false"></span>
        </a>
      </div>
    </div>
  )
}

export default Modal