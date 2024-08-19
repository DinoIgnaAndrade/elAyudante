'use client'
import styles from "./page.module.css";

import Carousel from "@/components/Carousel/Carousel";
//Components
import Navbar from "@/components/Navbar/Navbar";
import StickyNavBar from "@/components/Navbar/StickyNavBar";
import Header from "@/components/Header/Header";
import Header2 from "@/components/Header/Header2";
import Notification from "@/components/Notification/Notification";
import WorkServices from "@/components/WorkService/WorkServices";
import SectionMap from "@/components/Map/SectionMap";
import Footer from "@/components/Footer/Footer";


export default function Home() {

  const cards: React.ReactNode[] = [
    <Header key="header" />,
    <Header2 key="header2" />
  ];

  return (
        <main className={styles.main}>
          <Navbar />
          <StickyNavBar />
          <Carousel pages={cards} />
          <Notification />
          <WorkServices />
          <SectionMap />
          <Footer/>
        </main>
  );
}
