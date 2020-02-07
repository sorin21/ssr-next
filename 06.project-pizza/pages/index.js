import React, { Component } from 'react';
import axios from 'axios';

import Featured from '../components/includes/home/featured';
import PizzasList from '../components/includes/home/pizzas';

export class Home extends Component {
  // This works like an HOC. Everything we render: home, about, users, contact,  is going throught this file
  // we get the intial props here and we inject them to the children components
  static async getInitialProps() {
    let pizzasData;
    try {
      const response = await axios.get(`http://localhost:3000/pizza`);
      pizzasData = response.data;
    } catch (error) {
      console.log('error: ', error)
    }
    return { pizzasData }
  }
  render() {
    const { pizzasData } = this.props;
    return (
      <>
        <Featured pizzas={pizzasData} />
        <PizzasList pizzas={pizzasData} />
      </>
    )
  }
}

export default Home
