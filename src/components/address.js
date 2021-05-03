import React,{ useState } from "react";
import emailjs from 'emailjs-com';
import { useToasts } from 'react-toast-notifications';
function Address(){
    const [mailUser,setMailUser] = useState({"name":"","email":"","phone":"","message":""});
    const { addToast } = useToasts();
    let handleChange = e => {
        console.log('event occure',e);
        let name = e.target.name;
        setMailUser(prev => ({
            ...prev,
            [name]:e.target.value
        }));
    }
    
    let handleSendMessage = e =>{
        
        console.log('MailUser',mailUser);
        e.preventDefault();
        emailjs.sendForm('service_p3o76ha', 'template_68vbo9m', e.target, 'user_KM8rJRAewFTDKfH0BeXfy')
          .then((result) => {
              console.log(result.text);
              addToast('Email send Successfully', { appearance: 'success', autoDismiss: true}); 
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    
    return (
    <div className="">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9241553225825!2d72.87146231421461!3d19.198514753100646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b71523a433f7%3A0xd76129d5d45e5149!2sAmit%20Vanity%20van!5e0!3m2!1sen!2sin!4v1620049570430!5m2!1sen!2sin" title="Map" width="100%" height="450" style={{border:"0"}} loading="lazy"></iframe>

     
    <div className="container contact-form">
                <div className="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
                </div>
                <form id="contact" onSubmit={handleSendMessage}>
                    <h3>Drop Us a Message</h3>
                   <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Name" name="name" value={mailUser.name} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="email" className="form-control" placeholder="Your Email" value={mailUser.email} onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="phone" className="form-control" placeholder="Your Phone Number" value={mailUser.phone} onChange={handleChange}/>
                            </div>
                           
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="message" className="form-control" value={mailUser.message} placeholder="Your Message" onChange={handleChange}></textarea>
                            </div>
                            <div className="form-group">
                                {/* <Button  varient="primary" onSubmit={handleSendMessage}>Send Message</Button> */}
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                    </div>
                </form>
    </div>
    
    </div>    
    );
    }
    export default Address;