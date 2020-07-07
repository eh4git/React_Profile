import React, { Component } from "react"

export default class NavBar extends Component {
  render() {
    let profileText = this.props.profileText;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/React_Profile">Profile Page</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {profileText.profilesections.map((item) => {
              return (
                <li className="nav-item active">
                  <a className="nav-link" href={item.href}>
                    {item.name}</a>
                </li>
              )
            })
            }
            {profileText.profiles.map((item) => {
              return (
                <li className="nav-item">
                  <a className="nav-link" href={item.href} target="_blank">My
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