import gif from "../../Image/doom-gif.png";
import style from "../Loader/Loader.module.css"

export default function Loader() {
  return (
    <div className={style.loader}>
      <div className={style.loaderdiv}>
        <img src={gif} alt="loading" className={style.loaderi} />
        <h2 className={style.loaderh2}>
          <strong>LOADING . . .</strong>
        </h2>
      </div>
    </div>
  );
}