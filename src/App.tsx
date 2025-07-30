import { Usuario } from './models/Usuario'

function App() {
  const u1 = new Usuario('João', 30)

  return (
    <>
      <p>{u1.apresentar()}</p>
    </>
  )
}

export default App

