import { Connect4 } from '../components/Connect4'
import { Heading, VStack } from '@chakra-ui/react'
export default function Home() {
  return (
    <VStack spacing="3rem">
      <Heading>Connect 4</Heading>
      <Connect4 />
    </VStack>
  )
}
