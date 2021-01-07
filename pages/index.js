import styles from "../styles/Home.module.css"
import React from "react"
import { useRouter } from "next/router"

export default function Home() {
  const [username, setUsername] = React.useState("")
  const router = useRouter()

  function goToProfile() {
    router.push(`/user/${username}`)
  }

  return (
    <div className={styles.container}>
      <input type='text' onChange={e => setUsername(e.target.value)} />
      <button onClick={goToProfile}>Search</button>
    </div>
  )
}
