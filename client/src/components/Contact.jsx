import React from 'react';
import axios from 'axios';
import styles from '../../contact.module.css'

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: '',
      status: 'Submit',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const field = e.target.id;

    if (field === 'name') {
      this.setState({ name: e.target.value })
    } else if (field === 'email') {
      this.setState({ email: e.target.value})
    } else {
      this.setState({ message: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ status: "Sending" });

    // axios.post('/contact', this.state)
    //   .then((response) => {
    //     console.log('hello')
    //     if (response.data.status === 'sent') {
    //       alert('Message Sent');
    //       this.setState({ name: '', email: '', message: '', status: 'Submit'})
    //     } else if (response.data.status === 'failed') {
    //         alert('Message Failed');
    //     }
    //   })
    axios({
      method: "POST",
      url: "http://localhost:3000/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === 'sent') {
        alert('Message Sent');
        this.setState({ name: '', email: '', message: '', status: 'Submit'})
      } else if (response.data.status === 'failed') {
        alert('Message Failed');
      }
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div id="contact" className={styles.contact}>
          <div className={styles.container}>
            <h1>CONTACT</h1>
            <hr className={styles.heading} />
            <h5>Have a question?</h5>
            <div className={styles.form_container} method="POST">
              <form onSubmit={this.handleSubmit}>
                <div className={`${styles.form_group} form-group ${styles.input_container}`}>
                  <label htmlFor="exampleFormControlInput1" />
                  <input
                    type="text"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className={`${styles.form_group} form-group ${styles.input_container}`}>
                  <label htmlFor="exampleFormControlInput1" />
                  <input
                    type="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className={`${styles.form_group} form-group`}>
                  <label htmlFor="exampleFormControlTextarea1" />
                  <textarea
                    id="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Type your message"
                    rows="10"
                  />
                </div>
                <button className={styles.btnSubmit} type="Submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// const Contact = (props) => (
//   <div className={styles.wrapper}>
//     <div id="contact" className={styles.contact}>
//       <div className={styles.container}>
//         <h1>CONTACT</h1>
//         <hr className={styles.heading} />
//         <h5>Have a question?</h5>
//         <div className={styles.form_container}>
//           <form>
//             <div className={`${styles.form_group} form-group ${styles.input_container}`}>
//               <label for="exampleFormControlInput1" />
//               <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
//             </div>
//             <div className={`${styles.form_group} form-group ${styles.input_container}`}>
//               <label for="exampleFormControlInput1" />
//               <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
//             </div>
//             <div className={`${styles.form_group} form-group`}>
//               <label for="exampleFormControlTextarea1" />
//               <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Type your message" rows="10"></textarea>
//             </div>
//             <button className={styles.btnSubmit}>
//               Submit

//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// )

export default Contact;