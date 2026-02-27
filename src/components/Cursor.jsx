import { useState, useEffect } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const [pos, setPos]   = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })

  useEffect(() => {
    let t
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      clearTimeout(t)
      t = setTimeout(() => setRing({ x: e.clientX, y: e.clientY }), 80)
    }
    window.addEventListener('mousemove', move)
    return () => { window.removeEventListener('mousemove', move); clearTimeout(t) }
  }, [])

  return (
    <>
      <div className={styles.dot}  style={{ left: pos.x,  top: pos.y  }} />
      <div className={styles.ring} style={{ left: ring.x, top: ring.y }} />
    </>
  )
}
