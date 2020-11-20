import React from "react"
import './Contact.css'

function Contact(){
    return(
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Contact:</h1>
                <hr className="my-4"/>
                <form>
                    <div className="form-group">
                    <label for="exampleInputPassword1">Full Name:</label>
                    <input type="password" className="form-control" placeholder="Full Name" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group">
                    <label for="exampleInputEmail1">Email Address:</label>
                    <input type="email" placeholder="Email " className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">I will never share your email with anyone else.</small>
                    </div>
                    
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message:</label>
                        <textarea className="form-control" placeholder="Message"id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        
    )
}

export default Contact;