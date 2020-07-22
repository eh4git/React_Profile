import React, { Component } from "react"

export default class NavBar extends Component {
  render() {
    let profileText = this.props.profileText;
    return (
      <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href={profileText.homePage}>Profile Page</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {profileText.profilesections.map((item, i) => {
              return (
                <li className="nav-item active" key={i}>
                  <a className="nav-link" href={item.href}>
                    {item.name}</a>
                </li>
              )
            })
            }
            {profileText.profiles.map((item, i) => {
              return (
                <li className="nav-item" key={i}>
                  <a className="nav-link" href={item.href} rel="noopener noreferrer" target="_blank">My
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