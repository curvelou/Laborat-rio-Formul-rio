const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.post('/enviarDados', async (req, res) => {
    try {
        const data = req.body;

        const response = await fetch('https://api.github.com/repos/curvelou/Laboratorio-Formulario/contents/dados.json', {
            method: 'PUT',
            headers: {
                'Authorization': 'token SEU_TOKEN_AQUI',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Atualizando dados do formulário',
                content: Buffer.from(JSON.stringify(data, null, 2)).toString('base64')
            })
        });

        const result = await response.json();
        if (response.ok) {
            res.send({ success: true, message: 'Dados enviados com sucesso!' });
        } else {
            res.send({ success: false, message: result.message });
        }
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
