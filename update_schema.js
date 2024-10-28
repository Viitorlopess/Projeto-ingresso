const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Caminho para o banco de dados SQLite
const dbPath = path.resolve(__dirname, 'database.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados SQLite:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite.');
    }
});

// Função para atualizar o esquema do banco de dados
function updateSchema() {
    // Adicionar novas colunas à tabela eventos
    db.serialize(() => {
        db.run(`ALTER TABLE eventos ADD COLUMN genero TXT`, (err) => {
            if (err) {
                console.error('Erro ao adicionar a coluna genero', err.message);
            } else {
                console.log('Coluna genero adicionada com sucesso.');
            }
        });

       
    });
}

// Executar a atualização do esquema
updateSchema();

// Fechar a conexão com o banco de dados
db.close((err) => {
    if (err) {
        console.error('Erro ao fechar a conexão com o banco de dados:', err.message);
    } else {
        console.log('Conexão com o banco de dados fechada.');
    }
});
