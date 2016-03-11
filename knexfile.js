module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/DBNAME'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
