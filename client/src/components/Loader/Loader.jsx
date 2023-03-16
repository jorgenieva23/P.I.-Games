import React from "react";
import s from './Loader.module.css';

const Loading= ()=> {
    return (
        <section className={s.section}>
        <div className={s.loader}>
            <div className={s.dot0}></div>
            <div className={s.dot1}></div>
            <div className={s.dot2}></div>
            <div className={s.dot3}></div>
            <div className={s.dot4}></div>
            <div className={s.dot5}></div>
            <div className={s.dot6}></div>
            <div className={s.dot7}></div>
            <div className={s.dot8}></div>
        </div>
            <h1 className={s.h1}>Loading...</h1>

        <div className={s.loader}>
            <div className={s.dot0}></div>
            <div className={s.dot1}></div>
            <div className={s.dot2}></div>
            <div className={s.dot3}></div>
            <div className={s.dot4}></div>
            <div className={s.dot5}></div>
            <div className={s.dot6}></div>
            <div className={s.dot7}></div>
            <div className={s.dot8}></div>
        </div>
        </section>
        
    )
}

export default Loading;
