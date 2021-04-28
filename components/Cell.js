import { Flex } from '@chakra-ui/layout'
import * as gameStyles from '../styles/Home.module.css'

export const Cell = ({ value, columnIndex, play }) => {
  let color = 'whiteCircle'
  if (value === 1) {
    color = 'redCircle'
  } else if (value === 2) {
    color = 'yellowCircle'
  }

  return (
    <td>
      <Flex
        justify="center"
        align="center"
        className={gameStyles.gameCell}
        onClick={() => {
          play(columnIndex)
        }}
      >
        <div className={gameStyles[color]}></div>
      </Flex>
    </td>
  )
}
