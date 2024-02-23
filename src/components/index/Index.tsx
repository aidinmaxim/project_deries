import { Link, useNavigate } from "react-router-dom"
import styles from './Index.module.css'
import React, { FC } from "react"
import MyButton from "../myButton/myButton"


const Index: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.center}>
        <div className={styles.mod}>
          <h1>Manage your <span className={styles.red}> TV Shows </span> easily!</h1>
          <MyButton text='Login for free ;)' onClick={() => navigate('/login')} />
        </div>
      </div>

    </>

  );
}

export default Index