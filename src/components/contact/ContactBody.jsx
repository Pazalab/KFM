
const ContactBody = () => {
  return (
    <div className="contact-body">
               <div className="map-column" data-aos="fade-right">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.820283159139!2d36.81576379678955!3d-1.2815733999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f112e75ca8d35%3A0x9d58eb5cdaf70c93!2sKrishna%20Mansion%20Building!5e0!3m2!1sen!2ske!4v1744191983160!5m2!1sen!2ske" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
               </div>
               <div className="contact-form" data-aos="fade-left">
                             <div className="contact-form-content">
                                         <h2>Get in Touch</h2>
                                         <p>Fill in the form and we’ll get back to you shortly. We’re here to help—quick, friendly, and always happy to hear from you!</p>          

                                      <form>
                                                <div className="form-row">
                                                        <label htmlFor="name">Name <span>*</span></label>
                                                        <input type="text" placeholder="Enter full name" className="form-control" />
                                                </div>
                                                <div className="form-row">
                                                            <label htmlFor="email">Email Address <span>*</span></label>
                                                            <input type="email" placeholder="Enter email address" className="form-control" />
                                                </div>
                                                <div className="form-row">
                                                        <label htmlFor="number">Phone Number <span>*</span></label>
                                                        <input type="number" pattern="+[0,9]" className="form-control" placeholder="+254 7xxx xxxx"/>
                                                </div>
                                                <div className="form-row">
                                                          <label htmlFor="message">Message <span>*</span></label>
                                                          <textarea placeholder="Enter your message"></textarea>
                                                </div>

                                                <button type="submit">Send Message</button>
                                     </form>
                             </div>
               </div>
    </div>
  )
}

export default ContactBody