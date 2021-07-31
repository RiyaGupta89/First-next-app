import React from "react";
import styles from "../styles/Layout.module.css";
import Link from "next/link";

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <nav>
        <Link href="/">Home</Link>
        <Link href="">Contact</Link>
        <Link href="">Portfolio Projects</Link>
      </nav>
      <main className={styles.main}>
          {children}
      </main>
    </div>
  );
}
