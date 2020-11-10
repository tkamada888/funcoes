import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core/"

function FormularioCadastro() {
    return (
        <form>
            <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />

            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />

            <TextField id="CPF" label="CPF" variant="outlined" fullWidth margin="normal" />

            <FormControlLabel label="Promocoes" control={<Switch name="promocoes" defaultChecked="true" color="primary" />} />

            <FormControlLabel label="Novidades"  control={<Switch name="novidades" defaultChecked="true" color="primary" />} />

            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;