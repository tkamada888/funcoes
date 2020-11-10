//import { Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core"
import 'fontsource-roboto';

function App() {
  return (
    // <Fragment> o react precisa encapsular dados caso nao queria usar classes usar o fragment
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
      <FormularioCadastro />
    </Container>
    // </Fragment>
  );
}

export default App;
