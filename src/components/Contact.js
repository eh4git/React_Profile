import React, { Component } from "react";
import Pdf from "../assets/docs/WebDevResume.pdf";

export default class Contact extends Component {
    onResumeClick() {
  window.open(Pdf);
}
    render() {
        let profileText = this.props.profileText;
        return (
            <div className="contact-form container">
                <h2 id="contact">Contact Me</h2>
                {/* <form>
                <div className="form-group">
                    <label for="contactNameText">Name</label>
                    <input type="text" className="form-control nameText" id="contactNameText" placeholder="Enter your name." required />
                </div>
                <div className="form-group">
                    <label for="contactEmailText">Email address</label>
                    <input type="email" className="form-control emailText" id="contactEmailText" placeholder="yourEmail@example.com"
                        required />
                </div>
                <div className="form-group">
                    <label for="contactMessageText">Message</label>
                    <textarea className="form-control messageText" id="contactMessageText" placeholder="Enter your message here."
                        rows="10" maxlength="2500" required></textarea>
                </div>
                <button type="submit" id="contactFormBtn" className="btn btn-primary">Submit</button>
            </form> */}

                <a href={`mailto: ${profileText.email}?subject=I saw your profile`}>{profileText.email}</a>
        <p>{profileText.phone} <br/>
        {profileText.location}
        </p>
        <a onClick={this.onResumeClick} target="_blank" >Resume</a>
            </div>
        )
    }
}