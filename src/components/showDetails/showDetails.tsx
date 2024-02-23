import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchShowDetails } from "../../features/showDetails/showDetailsAction"
import { useParams } from "react-router-dom"
import parseUrl from "url-parse"
import MySwiper from "../swiper/MySwiper"
import styles from "./showDetails.module.css"


const ShowDetails = () => {
  const { permalink } = useParams()
  const dispatch = useDispatch()
  const showDetails = useSelector(state => state.showDetails.showDetails)

  useEffect(() => {
    dispatch(fetchShowDetails(permalink))
  }, [permalink])

  return (
    <div className="container">
      <div className="grid">
        <div className={styles.galleryBlock}>
          <MySwiper
            images={showDetails.pictures}>
          </MySwiper>
        </div>
        <div className={styles.descriptionBlock}>
            <div className="text-block">{showDetails.description}<small
              className="text-size-11"> (source: <a className="text-color-grey" href={showDetails.description_source}>
              {parseUrl(showDetails.description_source).hostname}
            </a>)</small>
            </div>
            <div className="details-block">

              <div className="block">
                  <div className="column"><b>Genres: </b>
                    {showDetails.genres?.map((genre: string, index: number) => (
                      <div key={index}>{genre}</div>
                    ))}
                    <br /><b>Station: </b> {showDetails.network}<br /><b>Rating: </b> {showDetails.rating} from {showDetails.rating_count} users<br />
                  </div>
                  <div className="column">
                    <b>Status: </b> {showDetails.status}<br /><b>Start: </b> {showDetails.start_date}</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ShowDetails