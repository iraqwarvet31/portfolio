import React from 'react';
import styles from '../../contact.module.css'

const Contact = (props) => (
  <div className={styles.wrapper}>
    <div id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h1>CONTACT</h1>
        <hr className={styles.heading} />
        <h5>Have a question?</h5>
        <div className={styles.form_container}>
          <form>
            <div className={`${styles.form_group} form-group ${styles.input_container}`}>
              <label for="exampleFormControlInput1" />
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
            </div>
            <div className={`${styles.form_group} form-group ${styles.input_container}`}>
              <label for="exampleFormControlInput1" />
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
            </div>
            <div className={`${styles.form_group} form-group`}>
              <label for="exampleFormControlTextarea1" />
              <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type your message" rows="10"></textarea>
            </div>
            <button className={styles.btnSubmit}>
              Submit

            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default Contact;