import React from "react"
import IShow from "../../features/shows/types/Show"
import styles from "./ShowItem.module.css"
import MyButton from "../myButton/myButton"
import { useNavigate } from "react-router-dom"
import ZoomInIcon from "@mui/icons-material/ZoomIn"


const ShowItem: React.FC<IShow> = ({ show }) => {
  const navigate = useNavigate()
  return (
    <div className={styles.listElement}>
      <div className={styles.image}
           style={{ backgroundImage: `url("${show.image_thumbnail_path}")` }}>
        <div className={styles.block}>
          <div className={styles.buttons}>
            <p onClick={() => navigate(`/show-details/${show.permalink}`)}><ZoomInIcon /> Show details</p>
            <MyButton text="Add to Favorites" onClick={() => navigate("/")} />
          </div>
        </div>
      </div>
      <div className={styles.name}><p>{show.name}<br /><small>{show.network}</small></p></div>
    </div>
  )
}

export default ShowItem