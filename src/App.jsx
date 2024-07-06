import { useState } from "react"
import "./App.css";
import SearchBar from "./Components/SearchBar";
import FoodLists from "./Components/FoodLists";
import Nav from "./Components/Nav";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from "./Components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState('716300');
  return (
    <div className="App">
      <Nav/>
      <SearchBar foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
          <FoodLists setFoodId={setFoodId} foodData={foodData}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
    </div>
  )
}

export default App
