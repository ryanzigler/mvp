const { Client } = require('pg');

const db = new Client({
  user: 'postgres',
  password: 'supersecretpassword',
  database: 'sole-mate',
  host: 'localhost',
  port: 5432,
});

db.connect();

const getReleases = (callback) => {
  db.query('SELECT * FROM releases')
    .then((results) => {
      callback(null, results.rows);
    })
    .catch((error) => {
      callback(error, null);
    });
};

const getRafflesBySneakerID = (sneakerID, callback) => {
  db.query('SELECT * FROM raffles WHERE release_id = $1', [sneakerID])
    .then((results) => {
      callback(null, results.rows);
    })
    .catch((error) => {
      callback(error, null);
    });
};

module.exports.getReleases = getReleases;
module.exports.getRafflesBySneakerID = getRafflesBySneakerID;
