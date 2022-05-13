import React, { useRef } from "react";
import emailjs from "emailjs-com"

const Contact = ({contactInfo}) => {
  if(contactInfo) {
    var titleContact = contactInfo.title
    var nameContact = contactInfo.name
    var emailContact = contactInfo.email
    var phoneContact = contactInfo.phone
    var messageContact = contactInfo.message
    var infoContact = contactInfo.informations
    var companyContact = contactInfo.company
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('gmail', 'template_uetd8rv', e.target, 'user_gSMIoHR0ZYwbPcTrh5jsH')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   });
   e.target.reset()
  }
      
        return (
          <section id="contact" >
            <div className="contact-section my-5">
          <div className="card">
            <div className="row">
              <div className="col-lg-8">
                <form ref={form} onSubmit={sendEmail}>
                <div className="card-body form">
                  <h3 className="mt-4"><i className="fas fa-envelope pr-2"></i>{titleContact}</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                      <label htmlFor="form-contact-name" className="lab">{nameContact}</label>
                        <input type="text" maxLength="80" name="name" id="form-contact-name" className="form-control" required/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                      <label htmlFor="form-contact-email" className="lab">{emailContact}</label>
                        <input type="email" minLength="5" maxLength="90"  name="email" id="form-contact-email" className="form-control" required/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                      <label htmlFor="form-contact-phone" className="lab">{phoneContact}</label>
                        <input type="text" minLength="10" maxLength="10" name="phone" id="form-contact-phone" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                      <label htmlFor="form-contact-company" className="lab">{companyContact}</label>
                        <input type="text" maxLength="100" name="company" id="form-contact-company" className="form-control"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                      <label htmlFor="form-contact-message" className="lab">{messageContact}</label>
                        <textarea  maxLength="650" name="message" id="form-contact-message" className="form-control md-textarea" rows="3" required></textarea>
                        <button type="submit" className="btn-floating btn-lg blue">
                          <i className="far fa-paper-plane"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="card-body contact text-center h-100 white-text">
                  <h3 className="my-4 pb-2">{infoContact}</h3>
                  <ul className="text-lg-left list-unstyled ml-4">
                    <li>
                      <p><i className="fas fa-map-marker-alt pr-2"></i>Cholet, 49300, France</p>
                    </li>
                    <li>
                      <p><i className="fas fa-phone pr-2"></i>+33 650 96 57 39</p>
                    </li>
                    <li>
                      <p><i className="fas fa-envelope pr-2"></i>mathieu.figari@gmail.com</p>
                    </li>
                  </ul>
                  <hr className="hr-light my-4"/>
                  <ul className="list-inline text-center list-unstyled">
                    <li className="list-inline-item">
                      <a rel="noopener noreferrer" target="_blank" href="https://github.com/MathieuFigari" className="p-2 fa-lg tw-ic">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a rel="noopener noreferrer" target="_blank" href="https://fr.linkedin.com/in/mathieu-figari" className="p-2 fa-lg li-ic">
                        <i className="fab fa-linkedin-in"> </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        )
      }
    

export default Contact;
