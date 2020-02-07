import React, { Component } from 'react'

class About extends Component {
  render() {
    const { siteData } = this.props;
    return (
      <>
        <div className="title_page">
          <h1>About us</h1>
        </div>
        <div className="content_wrapper">
          <div className="inner">
            <h1>Pizzeria is awesome</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, perspiciatis aliquam. Obcaecati sequi ab, facere vero iste fugiat, rerum itaque quibusdam eius assumenda numquam hic non, ullam atque exercitationem earum.</p>
          </div>
          <div className="middle">
            <div className="inner_middle">
              <div className="item two_c">
                <div className="wrapp">
                  <div className="top" style={{ background: `url("static/images/chef.jpg")` }}>
                  </div>
                  <div className="bottom">
                    <h2>Our Chefs</h2>
                    <h3>Pizzeria</h3>
                    <br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa illo, earum cumque eius corporis quidem fugiat adipisci vel nemo cupiditate!</p>
                  </div>
                </div>
              </div>
              <div className="item two_c">
                <div className="wrapp">
                  <div className="top" style={{ background: `url("static/images/store.jpg")` }}>
                  </div>
                  <div className="bottom">
                    <h2>Our Store</h2>
                    <h3>Pizzeria</h3>
                    <br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa illo, earum cumque eius corporis quidem fugiat adipisci vel nemo cupiditate!</p>
                    <div>
                      <p>Name: {siteData.name}</p>
                      <p>Phone number: {siteData.phone}</p>
                      <p>Email: {siteData.email}</p>
                      <p>Address: {siteData.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default About
