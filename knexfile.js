module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/linkedindb'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
