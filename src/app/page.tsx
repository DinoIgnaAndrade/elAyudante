import styles from "./page.module.css";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";


export default function Home() {
  return (
    <main className={styles.main}>

      <Navbar />
      <Header />
      
    </main>
  );
}
