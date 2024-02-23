import { FC } from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';
// import cn from 'classnames'
import styles from './Layout.module.css'
import { useAppSelector } from "../../app/hooks"
import Loader from "../loader/Loader"

const Layout: FC = () => {
  const { isLoading } = useAppSelector(state => state.user)

  return (
    <>
      {isLoading ? <Loader /> : (<>
    <div className="container">
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
        </>
      )}

    </>
  )
}

export default Layout
