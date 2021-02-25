import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const hasActiveChallenge = true

  return (
    <div className={styles.challengeBoxContainer}>
      
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400px</header>

          <main>
            <img src="icons/body.svg" />

            <strong>Exercite-se</strong>

            <p>É agora Diegão, bora lá meu parça.Caminhe por 3 minutos e estique suas pernas pra você ficar saudável.</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>Falhei</button>

            <button type="button" className={styles.challengeSucceededButton}>Completei</button>
          </footer>
        </div>

      ) : (
          <div className={styles.challengeNotActive}>
            <strong>Inicie um ciclo para receber desafios</strong>

            <p>
              <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios.
          </p>
          </div>
        )
      }
    </div>
  )
}