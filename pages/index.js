import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Connect4 } from '../components/Connect4'
import { Auth } from 'aws-amplify'
import { useState, useEffect } from 'react'

const Home = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log('User: ', user)
        setUser(user)
      })
      .catch((err) => setUser(null))
  }, [])
  return (
    user && (
      <>
        <AmplifySignOut />
        <h1>Connect 4</h1>
        <h3>
          This version is for local gameplay. To play online with friends, sign
          in!
        </h3>
        <Connect4 />
      </>
    )
  )
}

export default withAuthenticator(Home)
