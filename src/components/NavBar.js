import React from "react"

export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="profile.html">Profile Page</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="aboutme.html">About Me<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.linkedin.com/in/erik-hirsch-b8aa251a5/" target="_blank">My
                LinkedIn</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/eh4git" tabindex="-1" aria-disabled="true" target="_blank">My
                Github</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}