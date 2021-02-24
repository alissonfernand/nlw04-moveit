import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import {Profile} from '../components/Profile';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      
      {/* add title page */}
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />

          <CompletedChallenges />

          <Countdown />
        </div>

        <div>
          <p>right</p>
        </div>
      </section>
    </div>
  )
}
