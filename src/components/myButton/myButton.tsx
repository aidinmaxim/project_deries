import { FC } from 'react'
import style from './MyButton.module.css'

interface btnProps {
  text: string,
  onClick?: () => void
}

const MyButton: FC<btnProps> = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={style.button}>{text}</button>
    </>
  )
}

export default MyButton