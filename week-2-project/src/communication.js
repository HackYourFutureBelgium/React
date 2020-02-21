import React, { useState } from "react";

// Exercise: Fruit App
// User can submit their favourite fruit in our form
// The form however only supports banana's and apples
// TODO: finish connecting the FruitForm to our list
// TODO: add support for oranges, make sure we can add oranges to our list

const FruitApp = () => {
  const [fruits, setFruits] = useState([]);
  const onSubmit = event => {
    if (event) {
      fruits.push(event);
    }
    setFruits([...fruits]);
  };
  return (
    <section className={"fruit"}>
      <FruitForm onSubmitHandler={onSubmit} />
      <FruitList fruits={fruits} />
    </section>
  );
};

const FruitList = ({ fruits }) => {
  return (
    <ul>
      {fruits.map((fruit, index) => {
        return (
          <li key={index}>
            <Fruit name={fruit} />
          </li>
        );
      })}
    </ul>
  );
};

const Fruit = ({ name }) => {
  let fruitMoji;
  if (name === "banana") {
    fruitMoji = "🍌";
  } else if (name === "apple") {
    fruitMoji = "🍎";
  } else if (name === "orange") {
    fruitMoji = "🍊";
  } else if (name === "kiwi") {
    fruitMoji = "🥝";
  } else if (name === "peach") {
    fruitMoji = "🍑";
  }

  return <span data-testid="fruit">{fruitMoji}</span>;
};

const FruitForm = ({ onSubmitHandler }) => {
  const [fruit, setFruit] = useState("");

  const isValidFruit = fruitInput => {
    return (
      fruitInput === "apple" ||
      fruitInput === "banana" ||
      fruitInput === "kiwi" ||
      fruitInput === "orange" ||
      fruitInput === "peach"
    );
  };

  const onSubmit = event => {
    event.preventDefault(); // We disable the default behaviour of a form

    if (isValidFruit(fruit)) {
      onSubmitHandler(fruit);
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="email">Banana , Apple , Orange, peach and Kiwi</label>{" "}
          <br />
          <input
            id="name"
            type="text"
            name="name"
            aria-label="fruit-name"
            onChange={event => {
              setFruit(event.target.value);
            }}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

// Exercise: Fruit App With Balance
// TODO: finish connecting the FruitForm to our list
// TODO: make sure FruitBalance is rendered
// TODO: todo support oranges
// TODO: todo support peaches

const FruitAppWithBalance = () => {
  const [fruits, setFruits] = useState([]);

  const onSubmitHandler = fruit => {
    if (fruit) {
      fruits.push(fruit);
    }
    setFruits([...fruits]); /* update the fruits here */
  };

  return (
    <section className={"fruit"}>
      <FruitForm onSubmitHandler={onSubmitHandler} />
      <FruitList fruits={fruits} />
      <FruitBalance fruits={fruits} />
    </section>
  );
};

const FruitBalance = ({ fruits = [] }) => {
  let message;
  fruits.map(fruit => {
    (fruit === "banana") < (fruit === "apple")
      ? (message = "Eat more bananas")
      : (message = "Eat more apples");
  });
  return <p>{message}</p>;
};

export { FruitApp, FruitAppWithBalance };
