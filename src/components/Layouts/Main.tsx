import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = (props: any) => {
  const { children } = props;

  return (
    <Fragment>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};
export default Main;
