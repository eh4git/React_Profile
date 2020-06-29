import React, { Component } from "react"

export default class NavBar extends Component {
  render() {
    let profileText = this.props.profileText;
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="profile.html">Profile Page</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {profileText.profilesections.map((item) => {
              return (
                <li class="nav-item active">
                  <a class="nav-link" href={item.href} target="_blank">
                    {item.name}</a>
                </li>
              )
            })
            }
            {profileText.profiles.map((item) => {
              return (
                <li class="nav-item">
                  <a class="nav-link" href={item.href} target="_blank">My
                {item.name}</a>
                </li>
              )
            })
            }
          </ul>
        </div>
      </nav>
    )
  }
}