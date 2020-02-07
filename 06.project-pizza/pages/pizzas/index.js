import React, { Component } from 'react'
import axios from 'axios'

class Pizzas extends Component {
  static async getInitialProps({ query }) {
    let pizzaData;

    try {
      const response = await axios.get(`http://localhost:3000/pizza/${query.pizzaName}`);
      // because we get only one response we put like this, ugly way, [0]
      pizzaData = response.data[0];
    } catch (error) {
      console.log('=error=', error)
    }
    return { pizzaData }
  }
  render() {
    const { pizzaData } = this.props;
    return (
      <>
        <div className="pizza_page">
          <div className="top" style={{ background: `url('/static/images/${pizzaData.image}')` }}>
          </div>
          <div className="middle">
            <h1>{pizzaData.name}</h1>
            <div className="description">{pizzaData.fullDesc}</div>
            <div className="price">Get it for ${pizzaData.price}</div>
          </div>
        </div>
      </>
    )
  }
}

export default Pizzas;
