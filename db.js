const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('vestidos.db');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS vestidos (id INTEGER PRIMARY KEY AUTOINCREMENT, tamanho TEXT, preco TEXT, disponiblidade BOOLEAN)');

  db.run('INSERT INTO vestidos (tamanho, preco, disponiblidade) VALUES (?, ?, ?)', ['S', "1999.99", true]);
});

db.close();