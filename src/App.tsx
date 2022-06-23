import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import Router from "./Router"

// Usar um serviço de email na tela da home
// Fazer um loader customiza para o momento que ele puxa uma nova aula
// Exibir um qrCode referente á aula atual
// Verificar se tem material complementar e desafio
// Fazer o footer

function App() {  
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
