import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"
console.log(styles)
const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)
export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User
      username="Hover Bored"
      avatar="https://payload.cargocollective.com/1/19/635430/10340792/IMG_0388_2448.JPG"
      excerpt="This piece was made while I was living in Portland Oregon. The themes of roses and isolation are present in many of my works"
    />
    <User
      username="Scultura Venezia"
      avatar="https://payload.cargocollective.com/1/19/635430/10630211/IMG_0007_1536.jpg"
      excerpt="From a statue in Venice that I was fascinated by upon visiting."
    />
  </Container>
)