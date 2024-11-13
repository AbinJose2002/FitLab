import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const   
 handleSubmit = (e) => {
    e.preventDefault();   

    // Here, you can send the form data to a server or perform other actions
    console.log('Form submitted:', { name, email, company, message });
  };
    return (
        <div className='container'>
            <h1 className="contact-head text-center">Contact Us</h1>
            <p className='text-center py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam senectus nascetur id.</p>
            <form onSubmit={handleSubmit} className="col-5 mx-auto">
                <div className="py-3">
                    <label htmlFor="name">Name</label><br />
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>

                </div>

                <div className="py-3">
                    <label htmlFor="email">Email Address</label><br />
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Mail"/>
                </div>

                <div className="py-3 ">
                    <label htmlFor="company">Company</label><br />

                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Company"/>

                </div>

                <div className="py-3">
                    <label htmlFor="message">Message</label><br />
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>

                </div>

                <button type="submit" className="btn btn-primary col-4 mx-auto">Submit</button>
            </form>
        </div>
    )
}
