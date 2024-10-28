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
        db.run(`ALTER TABLE eventos ADD COLUMN quantidade_inteira INTEGER DEFAULT 0`, (err) => {
            if (err) {
                console.error('Erro ao adicionar a coluna quantidade_inteira:', err.message);
            } else {
                console.log('Coluna quantidade_inteira adicionada com sucesso.');
            }
        });

        db.run(`ALTER TABLE eventos ADD COLUMN preco_inteira REAL DEFAULT 0.00`, (err) => {
            if (err) {
                console.error('Erro ao adicionar a coluna preco_inteira:', err.message);
            } else {
                console.log('Coluna preco_inteira adicionada com sucesso.');
            }
        });

        db.run(`ALTER TABLE eventos ADD COLUMN quantidade_meia INTEGER DEFAULT 0`, (err) => {
            if (err) {
                console.error('Erro ao adicionar a coluna quantidade_meia:', err.message);
            } else {
                console.log('Coluna quantidade_meia adicionada com sucesso.');
            }
        });

        db.run(`ALTER TABLE eventos ADD COLUMN preco_meia REAL DEFAULT 0.00`, (err) => {
            if (err) {
                console.error('Erro ao adicionar a coluna preco_meia:', err.message);
            } else {
                console.log('Coluna preco_meia adicionada com sucesso.');
            }
        });

        db.run(`ALTER TABLE eventos ADD COLUMN quantidade_vip INTEGER DEFAULT 0`, (err) => {
            if (err) {
                console.error('Erro ao adicionar a coluna quantidade_vip:', err.message);
            } else {
                console.log('Coluna quantidade_vip adicionada com sucesso.');
            }
        });

        db.run(`ALTER TABLE eventos ADD COLUMN preco_vip REAL DEFAULT 0.00`, (err) => {
            if (err) {
                console.error('Erro ao adicionar a coluna preco_vip:', err.message);
            } else {
                console.log('Coluna preco_vip adicionada com sucesso.');
            }
        });

        db.run(`ALTER TABLE eventos ADD COLUMN quantidade_pcd_idoso INTEGER DEFAULT 0`, (err) => {
            if (err) {
                console.error('Erro ao adicionar a coluna quantidade_pcd_idoso:', err.message);
            } else {
                console.log('Coluna quantidade_pcd_idoso adicionada com sucesso.');
            }
        });

        db.run(`ALTER TABLE eventos ADD COLUMN preco_pcd_idoso REAL DEFAULT 0.00`, (err) => {
            if (err) {
                console.error('Erro ao adicionar a coluna preco_pcd_idoso:', err.message);
            } else {
                console.log('Coluna preco_pcd_idoso adicionada com sucesso.');
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
