document.addEventListener('DOMContentLoaded', () => {
    const eventList = document.getElementById('event-list');
    const searchBar = document.getElementById('search-bar');
    let allEvents = []; // Para armazenar todos os eventos

    function loadEvents() {
        fetch('/api/eventos') // Chame sua API para obter os eventos
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Sucesso') {
                    allEvents = data.data; // Armazena todos os eventos
                    displayEvents(allEvents); // Exibe todos os eventos
                } else {
                    console.error('Erro ao carregar eventos:', data.error);
                }
            })
            .catch(error => {
                console.error('Erro ao carregar eventos:', error);
            });
    }

    function displayEvents(events) {
        eventList.innerHTML = ''; // Limpa a lista de eventos

        events.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.className = 'event-item';

            const eventImage = document.createElement('img');
            eventImage.src = event.imagem_url || 'default-image.png';
            eventImage.alt = event.nome || 'Imagem do Evento';

            const eventDetails = document.createElement('div');
            const eventName = document.createElement('h3');
            eventName.textContent = event.nome || 'Nome não disponível';

            /*const eventDescription = document.createElement('p');
            eventDescription.textContent = event.descricao || 'Descrição não disponível';*/

            const eventDate = document.createElement('p');
            const date = event.data ? new Date(event.data).toLocaleDateString('pt-BR') : 'Data não disponível';
            eventDate.textContent = `Data: ${date}`;
            
            /*const eventTime = document.createElement('p');
            eventTime.textContent = `Hora: ${event.hora || 'Hora não disponível'}`;*/
            
            const eventButton = document.createElement('a');
            eventButton.href = `compra.html?id=${event.id}`; // Link para a página de compra
            eventButton.innerHTML = '<button>Saber Mais</button>'; // Botão para saber mais

            eventDetails.appendChild(eventName);
            //eventDetails.appendChild(eventDescription);
            eventDetails.appendChild(eventDate);
            //eventDetails.appendChild(eventTime);
            eventDetails.appendChild(eventButton);
            eventItem.appendChild(eventImage);
            eventItem.appendChild(eventDetails);
            eventList.appendChild(eventItem);
        });
    }

    // Implementa a funcionalidade de pesquisa em tempo real
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();

        // Filtra os eventos com base na consulta
        const filteredEvents = allEvents.filter(event =>
            event.nome.toLowerCase().includes(query) ||
            event.descricao.toLowerCase().includes(query)
        );

        displayEvents(filteredEvents); // Exibe os eventos filtrados
    });

    loadEvents(); // Carrega eventos na inicialização
});
