import styles from '../styles/components/Profile.module.css'

export function Profile () {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/alissonfernand.png" alt="Alisson Fernandes"/>

      <div>
        <strong>Alisson Fernandes</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}