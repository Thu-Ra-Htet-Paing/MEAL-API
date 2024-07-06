import styles from './ingredients.module.css'

function Ingredients({item}) {
  return (
    <div>
        <div className={styles.ingreContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt=''></img>
            </div>

            <div className={styles.content}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.amount}>{item.measures.metric.amount} {item.measures.metric.unitShort}</div>
            </div>             
        </div>
    </div>
  )
}

export default Ingredients
