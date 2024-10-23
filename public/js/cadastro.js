document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#form_evento');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita o envio padrão do formulário
        const formData = new FormData(form);

        fetch('/api/cadastrar_evento', {
            method: 'POST',
            body: formData // Enviando como FormData
        })
        .then(response => {
            // Verifica se a resposta é um erro
            if (!response.ok) {
                return response.json().then(data => { throw new Error(data.error); });
            }
            return response.json();
        })
        .then(data => {
            alert(data.message); // Mostra a mensagem de sucesso
            window.location.href = '/dashboard-fornecedor.html'; // Redireciona
        })
        .catch(error => {
            alert('Erro: ' + error.message); // Mostra o erro em um alerta
            console.error('Erro:', error);
        });
    });
});
