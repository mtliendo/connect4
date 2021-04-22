import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Connect4 } from '../components/Connect4'
import { API, Auth } from 'aws-amplify'
import { useState, useEffect } from 'react'
import * as mutations from '../src/graphql/mutations'
import * as queries from '../src/graphql/queries'
import * as subscriptions from '../src/graphql/subscriptions'
const Home = () => {
  const [user, setUser] = useState(null)
  const [usernameText, setUsernameText] = useState('')
  const [games, setGames] = useState([])
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user)
      })
      .catch(() => setUser(null))
  }, [])

  useEffect(() => {
    API.graphql({
      query: subscriptions.onGameCreatedForUsername,
      variables: { sentToUsername: 'mtliendo' },
    }).subscribe({
      next: (data) => {
        console.log(data)
      },
    })
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (usernameText !== user.username) {
      API.graphql({
        query: queries.getUser,
        variables: { username: usernameText },
      }).then((data) => {
        const sentToUsername = data.data.getUser.username
        API.graphql({
          query: mutations.createGame,
          variables: {
            input: {
              createdByUser: user.username,
              sentToUsername,
              gameName: 'connect4',
              gameDetails: {
                player1: user.username,
                player2: sentToUsername,
                currentPlayer: user.username,
                board:
                  '[[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null],[null,null,null,null,null,null,null]]',
                gameOver: false,
                message: '',
              },
            },
          },
        }).then((data) => {
          const gameDetails = data.data.createGame.gameDetails
          const boardJSON = JSON.parse(gameDetails.board)
          setGames([...games, { ...gameDetails, board: boardJSON }])
        })
      })
    } else {
      console.log('cant search for yourself silly!')
    }
  }

  return (
    user && (
      <>
        <AmplifySignOut />
        <h1>Connect 4</h1>
        <form onSubmit={handleFormSubmit}>
          <label>Search for user</label>
          <input
            value={usernameText}
            onChange={(e) => setUsernameText(e.target.value)}
          />
        </form>
        {games.map((game) => {
          return <Connect4 importedGameState={game} />
        })}
      </>
    )
  )
}

export default withAuthenticator(Home)
