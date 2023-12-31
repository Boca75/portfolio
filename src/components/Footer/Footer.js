import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <a href="https://boca75.github.io/portfolio/">
        Arthur - Intégrateur / Développeur Web
      </a>

      <div className={styles.footerCopyright}>
        <small>&copy; Portfolio BocaDev. Tous droits réservés</small>
      </div>
    </footer>
  )
}

export default Footer
