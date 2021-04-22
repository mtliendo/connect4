/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onGameCreatedForUsername = /* GraphQL */ `
  subscription OnGameCreatedForUsername($username: String!) {
    onGameCreatedForUsername(username: $username) {
      id
      createdByUser
      sentToUsername
      gameName
      gameDetails {
        player1
        player2
        currentPlayer
        board
        gameOver
        message
      }
      createdAt
      updatedAt
    }
  }
`;
export const onGameUpdatedByID = /* GraphQL */ `
  subscription OnGameUpdatedByID($gameID: ID!) {
    onGameUpdatedByID(gameID: $gameID) {
      id
      createdByUser
      sentToUsername
      gameName
      gameDetails {
        player1
        player2
        currentPlayer
        board
        gameOver
        message
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      createdByUser
      sentToUsername
      gameName
      gameDetails {
        player1
        player2
        currentPlayer
        board
        gameOver
        message
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      createdByUser
      sentToUsername
      gameName
      gameDetails {
        player1
        player2
        currentPlayer
        board
        gameOver
        message
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      createdByUser
      sentToUsername
      gameName
      gameDetails {
        player1
        player2
        currentPlayer
        board
        gameOver
        message
      }
      createdAt
      updatedAt
    }
  }
`;
