import React from "react";
import PropTypes from "prop-types";

function Food({name, color, link, rating}){
  return (
    <div>
      <h1>I like {name}</h1>
      <h2>Food {color}</h2>
      <p>{rating}/5</p>
      <a href={link}>Site</a>
    </div>
  );
}

const foodILike = [
  {
    id: 0,
    name:"Kinchi",
    color:"red",
    link: "http://naver.com",
    rating: 5
  },
  {
    id: 2,
    name:"Samgiopsal",
    color:"beige",
    link:"http://daum.net",
    rating:3
  },
  {
    id: 3,
    name:"Bibimbap",
    color:"rainbow",
    link:"http://nate.com",
    // rating: 4.3
  }
];

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} color={dish.color} link={dish.link} rating={dish.rating} />
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
    {console.log(foodILike.map(renderFood))}
    {foodILike.map(renderFood)}
    </div>
  )
}

export default App;
