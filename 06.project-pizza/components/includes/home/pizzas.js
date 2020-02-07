import React from 'react'
import Link from 'next/link';

const PizzasList = (props) => {
  const showPizzas = () => (
    props.pizzas.map(pizza => {
      if (pizza.pod === false) {
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
              <div className="item">
                <div className="inner-item" style={{ background: `url("/static/images/${pizza.image}")` }}>
                  <div className="overlay"></div>
                  <div className="item-info">
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
  return (
    <div className="pizzas_wrapper">
      <div className="articles">
        {showPizzas()}
      </div>
    </div>
  )
}

export default PizzasList;