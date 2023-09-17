import Heading from "./Heading";
import Card from "./Card";
import Button from "./Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Heading firstName = "Win"/>
      <Card h2="First Card's h2" h3="First Card's h3"/>
      <Card h2="Second Card's h2" h3="Second Card's h3"/>
      <Card h2="Third Card's h2" h3="Third Card's h3"/>
      <Button/>
    </div>
  )
}

export default App;