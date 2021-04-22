import { Connect4 } from '../components/Connect4'

export default function Home() {
  return (
    <>
      <h1>Connect 4</h1>
      <h3>
        This version is for local gameplay. To play online with friends, sign
        in!
      </h3>
      <Connect4 />
    </>
  )
}
