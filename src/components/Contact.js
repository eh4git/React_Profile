import React from "react";

export default function Contact() {
    return (
        <div class="contact-form container">
            <form>
                <div class="form-group">
                    <label for="contactNameText">Name</label>
                    <input type="text" class="form-control nameText" id="contactNameText" placeholder="Enter your name." required />
                </div>
                <div class="form-group">
                    <label for="contactEmailText">Email address</label>
                    <input type="email" class="form-control emailText" id="contactEmailText" placeholder="yourEmail@example.com"
                        required />
                </div>
                <div class="form-group">
                    <label for="contactMessageText">Message</label>
                    <textarea class="form-control messageText" id="contactMessageText" placeholder="Enter your message here."
                        rows="10" maxlength="2500" required></textarea>
                </div>
                <button type="submit" id="contactFormBtn" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}