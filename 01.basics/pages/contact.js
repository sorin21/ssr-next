import React, { Component } from "react";
import MainLayout from "../components/layouts/mainLayout";

class Contact extends Component {
  render() {
    return (
      <MainLayout>
        <div>Contact</div>
        <div className="jsxStyled">Style with styled jsx</div>
        <style jsx>
          {`.jsxStyled {
              color: blue;
            }
          `}
        </style>
        <div className="contact_static">Aloo static style</div>
        <div className="contact_static"><img src="/static/images/cat.jpg" alt="Cat" /></div>
      </MainLayout>
    );
  }
}

export default Contact;
