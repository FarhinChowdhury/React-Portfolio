import React from "react"

function Contact(){
    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" claclassNamess="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" clclassNameass="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div claclassNamess="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" claclassNamess="form-control" id="exampleInputPassword1"/>
                </div>
                <div clasclassNames="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label clclassNameass="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        
    )
}

export default Contact;