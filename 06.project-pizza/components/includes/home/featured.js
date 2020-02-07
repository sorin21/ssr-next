import React from 'react';
import Link from 'next/link';

const Featured = (props) => {
  const showFeatured = () => (
    props.pizzas.map(pizza => {
      // check if pod === true
      if (pizza.pod === true) {
        return (
          <Link
            key={pizza._id}
            href={{
              pathname: "/pizzas",
              query: {
                pizzaName: pizza.idName
              }
            }}
            as={`/pizzas/${pizza.idName}`}
          >
            <a>
              <div className="featured_container" style={{ background: `url("static/images/${pizza.image}")` }}>
                <div className="overlay"></div>
                <div className="info">
                  <div className="top">
                    <h2>Pizza of the day</h2>
                  </div>
                  <div className="description">
                    <h3>{pizza.name}</h3>
                    <p>{pizza.shortDesc}</p>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        )
      }
    })
  )
  return showFeatured();
}

export default Featured
