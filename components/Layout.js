import React from "react";
import styles from "../styles/Layout.module.css";
import Link from "next/link";

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
      <div>
        <span className={styles.logo}>Riya<span className={styles.dot}>.</span></span>
      </div>
      <div className={styles.navlinks}>
        <Link href="/">Home</Link>
        <Link href="">Contact</Link>
        <Link href="">Portfolio Projects</Link>
        </div>
      </nav>
      <main className={styles.main}>
          {children}
      </main>
    </div>
  );
}
