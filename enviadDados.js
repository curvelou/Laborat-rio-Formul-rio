async function enviarDados() {
    const ponto = document.getElementById('ponto').value;
    const tratamento = document.getElementById('tratamento').value;
    const massa = document.getElementById('massa').value;
    const fibras = document.getElementById('fibras').value;
    const fragmentos = document.getElementById('fragmentos').value;

    const data = {
        ponto,
        tratamento,
        massa,
        fibras,
        fragmentos
    };

    try {
        const response = await fetch('https://api.github.com/repos/curvelou/Laboratorio-Formulario/contents/dados.json', {
            method: 'PUT',
            headers: {
                'Authorization': 'token SEU_TOKEN_AQUI',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Atualizando dados do formulário',
                content: btoa(JSON.stringify(data, null, 2))
            })
        });

        const result = await response.json();
        if (response.ok) {
            alert('Dados enviados com sucesso!');
        } else {
            alert('Erro ao enviar dados: ' + result.message);
        }
    } catch (error) {
        alert('Erro ao enviar dados: ' + error.message);
    }
}
