import '../styles/global.css'

import {ChallengesProdiver} from '../context/ChallengesContext';

// component global
function MyApp({ Component, pageProps }) {
  return (
    // add ChallengesProdiver global
    <ChallengesProdiver>
      <Component {...pageProps} />
    </ChallengesProdiver>
  )
}

export default MyApp
