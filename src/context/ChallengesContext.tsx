import {createContext, useState, ReactNode, useEffect } from 'react';

import Cookie from 'js-cookie';

import challenges from '../../challenges.json';


interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number; 
  experienceToNextLevel: number; 
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  activeChallenge: Challenge;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProdiver ({children, ...rest}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)

  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1 ) * 4, 2)

  // permission notification
  useEffect(() => {
    Notification.requestPermission();
  }, [])

  useEffect(() => {
   Cookie.set('level', String(level));
   Cookie.set('currentExperience', String(currentExperience));
   Cookie.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted])


  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} xp!`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  return(
    <ChallengesContext.Provider 
    value={{ 
        level, 
        currentExperience,
        experienceToNextLevel, 
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge 
      }}>
      {children}
    </ChallengesContext.Provider>
  )
}