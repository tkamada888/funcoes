import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core/"

function FormularioCadastro({ aoEnviar, validarCPF }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido: true, texto: "" }})

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
        }}>

            <TextField id="nome" value={nome} label="Nome" variant="outlined" fullWidth margin="normal"
                onChange={(event) => {
                    setNome(event.target.value);
                }}
            />

            <TextField id="sobrenome" value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                label="Sobrenome" variant="outlined" fullWidth margin="normal" />

            <TextField id="cpf" label="cpf" variant="outlined" fullWidth margin="normal"
                onChange={(event) => {
                    setCpf(event.target.value);
                }
                }
                onBlur={(event) => {
                    const ehValido = validarCPF(cpf);
                    setErros({cpf:ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
            />

            <FormControlLabel label="Promoções" control={<Switch name="promocoes" checked={promocoes} color="primary"
                onChange={(event) => {
                    setPromocoes(event.target.checked);
                }}
            />} />

            <FormControlLabel label="Novidades" control={<Switch name="novidades" checked={novidades} color="primary"
                onChange={(event) => {
                    setNovidades(event.target.checked);
                }}
            />} />

            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form >
    );
}

export default FormularioCadastro;