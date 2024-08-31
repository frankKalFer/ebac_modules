function App() {
  const nome = "Franklin"

  function retornaNome() {
    return nome
  }

  const pessoa = {
    nome: "Beci"
  }

  let estaDeDia = true;

  return (
    <>
      <h1>Ola, {pessoa.nome}</h1>
      <h2>Fernandes</h2>
      {estaDeDia ? 'Bom dia' : "Boa tarde"}
    </>

  )
}

export default App
