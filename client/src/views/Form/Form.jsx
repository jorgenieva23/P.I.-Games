import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "./Form.module.css";
import { createGame, getGenres, getPlatforms } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const dispatch = useDispatch();
  const allGenr = useSelector((state) => state.genres);
  const allGames = useSelector((state) => state.games);
  const allPlatforms = useSelector((state) => state.platforms);
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: [],
    genres: [],
    image: "",
  });

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPlatforms());
  }, [dispatch]);

  const validate = (form) => {
    let errors = {};
    if (form.name) {
      if (
        allGames.find((e) => e.name.toLowerCase() === form.name.toLowerCase())
      )
        errors.name = `The name ${form.name} is allready exist`;

      if (form.name.length < 0 || form.name.length > 25)
        errors.name = "invalidate name";
    } else {
      errors.name = "Your Game must have a name";
    }

    if (form.released) {
      if (form.released < 18 / 10 / 1958) errors.releaced = "Date is required";
    } else {
      errors.releaced = "Date is required";
    }

    if (form.rating) {
      if (isNaN(parseInt(form.rating)))
        errors.rating = "Rating should be a number";
      if (form.rating < 0.1 || form.rating > 5)
        errors.rating = "Rating must range between 0 to 5";
    } else {
      errors.rating = "Rating is Required";
    }
    return errors;
  };

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelectPlatforms(e) {
    if (!form.platforms.includes(e.target.value)) {
      setForm({
        ...form,
        platforms: [...form.platforms, e.target.value],
      });
    }
  }

  function handleDeletePlatforms(e) {
    setForm({
      ...form,
      platforms: form.platforms.filter((plat) => plat !== e),
    });
  }

  function handleSelectGenre(e) {
    if (!form.genres.includes(e.target.value)) {
      setForm({
        ...form,
        genres: [...form.genres, e.target.value],
      });
    }
  }

  function handleDeleteGenre(e) {
    setForm({
      ...form,
      genres: form.genres.filter((genr) => genr !== e),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createGame(form));
    setForm({
      name: "",
      description: "",
      released: "",
      rating: "",
      image: "",
      platforms: [],
      genres: [],
    });
    alert("creado exitosamente");
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPlatforms());
  }, [dispatch]);

  return (
    <div className={style.form_back_image}>
      <div className={style.form_mainConteiner}>
        <div className={style.form_container}>
          <h1 className={style.form_h1}>Create your Game</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={style.form_bCreate}>
              <label className={style.form_requeriment}>Name </label>
              <p className={style.form_p}>
                <input
                  className={style.form_input}
                  type="text"
                  value={form.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                  required
                />
                {errors.name && <p>{errors.name}</p>}
              </p>
            </div>
            <div>
              <label className={style.form_requeriment}>Description </label>
              <p className={style.form_p}>
                <textarea
                  className={style.form_textarea}
                  type="text"
                  value={form.description}
                  name="description"
                  onChange={(e) => handleChange(e)}
                  required
                />
                {errors.description && <p>{errors.description}</p>}
              </p>
            </div>
            <div>
              <label className={style.form_requeriment}>Released </label>
              <p className={style.formp}>
                <input
                  className={style.form_input}
                  type="date"
                  value={form.released}
                  name="released"
                  onChange={(e) => handleChange(e)}
                  required
                />
                {errors.released && <p>{errors.released}</p>}
              </p>
            </div>
            <div>
              <label className={style.form_requeriment}>rating </label>
              <p className={style.form_p}>
                <input
                  className={style.form_input}
                  type="number"
                  value={form.rating}
                  name="rating"
                  step="0.5"
                  min="0"
                  max="5"
                  onChange={(e) => handleChange(e)}
                  required
                />
                {errors.rating && <p>{errors.rating}</p>}
              </p>
            </div>
            <div>
              <label className={style.form_requeriment}>Platforms </label>

              <p className={style.form_p}>
                <select
                  className={style.form_select}
                  onChange={(e) => handleSelectPlatforms(e)}
                >
                  <option value="selected" hidden>
                    Platforms
                  </option>
                  {allPlatforms
                    ?.sort(function (a, b) {
                      if (a < b) return -1;
                      if (a > b) return 1;
                      return 0;
                    })
                    .map((e) => {
                      return <option value={e}>{e}</option>;
                    })}
                </select>
              </p>
            </div>
            <p>
              {form.platforms.map((el) => (
                <div className={style.form_div}>
                  <p>{el}</p>
                  <button
                    className={style.form_button1}
                    onClick={() => handleDeletePlatforms(el)}
                  >
                    x
                  </button>
                </div>
              ))}
            </p>

            <div>
              <label className={style.form_requeriment}>Genres </label>
              <p className={style.form_p}>
                <select
                  className={style.form_select}
                  onChange={(e) => handleSelectGenre(e)}
                >
                  <option value="selected" hidden>
                    Genres
                  </option>
                  {allGenr
                    ?.sort(function (a, b) {
                      if (a < b) return -1;
                      if (a > b) return 1;
                      return 0;
                    })
                    .map((e) => {
                      return <option value={e}>{e}</option>;
                    })}
                </select>
              </p>
            </div>
            {form.genres.map((el) => (
              <div className={style.form_div}>
                <p className={style.form_p}>{el}</p>
                <button
                  className={style.form_button1}
                  onClick={() => handleDeleteGenre(el)}
                >
                  x
                </button>
              </div>
            ))}
            <div>
              <label className={style.form_requeriment}>Photo: </label>
              <p className={style.form_p}>
                <input
                  type="file"
                  value={form.image}
                  name="image"
                  onChange={(e) => handleChange(e)}
                  // required
                />
              </p>
            </div>
            <div>
              <button className={style.form_button2} type="submit">
                <span className={style.form_transition}></span>
                <span className={style.form_gradient}></span>
                <span className={style.form_label}>Create</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
