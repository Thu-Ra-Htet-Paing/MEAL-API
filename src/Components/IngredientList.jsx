import React from 'react'
import Ingredients from './Ingredients'

function IngredientList({recipe}) {
  return (
    <div>
      {recipe.extendedIngredients.map((item, index) => (
        <Ingredients item={item} key={index}/>
      ))}
    </div>
  )
}

export default IngredientList
