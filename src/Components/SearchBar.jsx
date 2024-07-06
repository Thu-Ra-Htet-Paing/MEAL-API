import React, { useEffect, useState } from 'react';
import styles from './search.module.css';

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "adc200bcd89a47138f3bf0d59a3a59f8";

function SearchBar({foodData, setFoodData}) {
    const [search, setSearch] = useState("pizza");

    useEffect(()=>{
        async function fetchFood() {
            const respond = await fetch(`${URL}?query=${search}&apiKey=${API_KEY}`);
            const data = await respond.json();
            console.log(data.results)
            setFoodData(data.results)
        }
        fetchFood()
    },[search])

  return (
    <div className={styles.SearchBar}>
      <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} className={styles.input}></input>
    </div>
  )
}

export default SearchBar
