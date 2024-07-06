import FoodItem from "./FoodItem"

function FoodLists({foodData, setFoodId}) {
  return (
    <div>
      {foodData.map(food=> (
        <FoodItem food={food} setFoodId={setFoodId} key={food.id}/>
      ))}
    </div>
  )
}

export default FoodLists
