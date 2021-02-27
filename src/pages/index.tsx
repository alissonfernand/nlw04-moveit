import Head from 'next/head';
import { GetServerSideProps } from "next";

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallengeBox } from "../components/ChallengeBox";
import {Profile} from '../components/Profile';


import { CountdownProvider } from "../context/CountdownContext";
import { ChallengesProdiver } from "../context/ChallengesContext";

import styles from '../styles/pages/Home.module.css';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProdiver 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      >
      <div className={styles.container}>
        
        {/* add title page */}
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />

              <CompletedChallenges />

              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProdiver>
  )
}

// get Cookie
export const getServerSideProps: GetServerSideProps = async (context) => {

  const {level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }

}