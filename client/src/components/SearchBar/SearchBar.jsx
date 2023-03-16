import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGamesName } from "../../redux/actions";
import style from "./Search.module.css";
import lupa from "../../Image/lupa.png"


export default function SearchBar() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault(e);
    dispatch(getGamesName(name));
    name.length === 0
      ? alert("ingresa el nombre")
      : dispatch(getGamesName(name));
    setName("");
  }

  return (
    <div className={style.container}>
      <form action="" className={style.searchbar}>
        <input  
          className={style.input}
          type="text"
          name="search"
          placeholder="what are we looking for?"
          onChange={(e) => setName(e.target.value)}
        />
        <button className={style.button}type="submit" onClick={(e) => handleSubmit(e)}>
          <img className={style.img} src={lupa} alt="boton"/>
        </button>
      </form>
    </div>
  );
}

// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getDogName } from "../../redux/actions"
// import styles from "./Search.module.css";

// export default function SearchBar() {
//   const [dogState, setDogsState] = useState("");
//   const dispatch = useDispatch();

//   function handleClick(e) {
//     e.preventDefault();

//     if (dogState.length === 0) {
//       return alert("Please input a name to start the search");
//     } else {
//       dispatch(getDogName(dogState));
//       setDogsState("");
//     }
//   }

//   return (
//     <div className={styles.searchBarObject}>
//       <input
//         type="text"
//         placeholder="Search a dog..."
//         className={styles.input}
//         value={dogState}
//         onChange={(e) => setDogsState(e.target.value)}
//       />
//       <button type="submit" onClick={handleClick}>
//         <span className="material-icons">search</span>
//       </button>
//     </div>
//   );
// }
