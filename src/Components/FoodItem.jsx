import styles from './fooditem.module.css';

function FoodItem({food, setFoodId}) {
  return (
    <div className={styles.FoodItem}>
        <img src={food.image} alt="Food Pic" className={styles.image}></img>
        <div className={styles.content}>
          <p className={styles.p}>{food.title}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={()=>setFoodId(food.id)} className={styles.button}>View Recipe</button>
        </div>
    </div>
  )
}

export default FoodItem

