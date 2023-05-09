import {react} from 'react';

const ContactUs = () => {
    return (
        <section class="contact background" id="contact">
            <h2 class="text-center"> Contact Us </h2>
            <div class="form">
                <input type="text" name="name" id="name" placeholder="Enter Your Name" class="contents" /> 
                <input type="number" name="phone" id="phone" placeholder="Enter Your Contact" class="contents" />  
                <input type="email" name="email" id="email" placeholder="Enter Your Email" class="contents" /> 
                <textarea name="text" id="text" cols="80" rows="10" placeholder="About Yourself" class="contents"></textarea>
                <button class="btn"> Submit </button>
            </div>
        
        </section>
    );
}

export default ContactUs;