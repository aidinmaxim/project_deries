import { FC, useEffect } from "react"
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { logoutUser } from "../../features/auth/authSlice"
import { loginToken } from "../../features/auth/authAction"

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.user)

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(logoutUser())
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token && token.length > 0) {
      dispatch(loginToken(token))
    }
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <div>
          <NavLink to='/'>Index</NavLink>
        </div>
        {user ? (
          <>
            <div className={styles.left}>
              <NavLink to='all-tv-shows'>All TV Shows</NavLink>
              <NavLink to='my-favorites'>My Favorites</NavLink>
            </div>
            <div className={styles.right}>
              <a className={styles.profile}> {user.username}</a>
                <NavLink to='/' onClick={handleLogout}>Logout</NavLink>
            </div>
          </>
        ) : (
          <div className={styles.right}>
            <NavLink to='/login'>Login</NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
