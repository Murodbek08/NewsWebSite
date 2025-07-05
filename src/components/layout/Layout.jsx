import React, { Component } from "react";
import { Fragment } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Outlet />
        </main>
      </Fragment>
    );
  }
}

export default Layout;
