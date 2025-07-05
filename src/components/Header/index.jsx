import React, { Component } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

export class Header extends Component {
  state = {
    open: false,
  };
  hamburger = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    let { open } = this.state;
    return (
      <header>
        <div className="container">
          <nav className="nav-desctop">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/business">Business</NavLink>
              </li>
              <li>
                <NavLink to="/entertainment">Entertainment</NavLink>
              </li>
              <li>
                <NavLink to="/general">General</NavLink>
              </li>
              <li>
                <NavLink to="/health">Health</NavLink>
              </li>
              <li>
                <NavLink to="/science">Science</NavLink>
              </li>
              <li>
                <NavLink to="/sports">Sports</NavLink>
              </li>
              <li>
                <NavLink to="/technology">Technology</NavLink>
              </li>
            </ul>
            <label className="hamburger">
              <input type="checkbox" onClick={this.hamburger} />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                />
                <path className="line" d="M7 16 27 16" />
              </svg>
            </label>
            <form onSubmit={this.formSubmit}>
              <div className="input-container">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                  </g>
                </svg>
                <input
                  onChange={this.inputSearch}
                  id="search"
                  placeholder="Searching..."
                  type="text"
                  className="input"
                />
              </div>
              <button type="submit">
                <span> Search</span>
                <svg
                  className="icon-search"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path
                      fill="white"
                      d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                    />
                  </g>
                </svg>
              </button>
            </form>
          </nav>
          <nav className={`nav-mobile ${open ? "active-menu" : ""}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/business">Business</NavLink>
              </li>
              <li>
                <NavLink to="/entertainment">Entertainment</NavLink>
              </li>
              <li>
                <NavLink to="/general">General</NavLink>
              </li>
              <li>
                <NavLink to="/health">Health</NavLink>
              </li>
              <li>
                <NavLink to="/science">Science</NavLink>
              </li>
              <li>
                <NavLink to="/sports">Sports</NavLink>
              </li>
              <li>
                <NavLink to="/technology">Technology</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
