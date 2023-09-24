import { useState } from "react";
import Heading from "./Heading";
import Card from "./Card";
import Button from "./Button";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";
import "./App.css";

function App() {
  const [fruits] = useState([
    {name: 'apple', id: 1},
    {name: 'orange', id: 2},
    {name: 'peach', id: 3}
  ])
  return (
    <div className="App">
      {/* <Heading firstName = "Win"/>
      <Card h2="First Card's h2" h3="First Card's h3"/>
      <Card h2="Second Card's h2" h3="Second Card's h3"/>
      <Card h2="Third Card's h2" h3="Third Card's h3"/>
      <Button/> */}
      <Fruits fruits = {fruits}/>
      <FruitsCounter fruits = {fruits}/>
    </div>
  )
}

export default App;