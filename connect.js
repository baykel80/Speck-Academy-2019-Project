const { Client } = require('pg')

const client = new Client({
    user: 'mihaelis',
    host: '138.68.87.73',
    database: 'db_mihaelis',
    password: 'q>@AM8AH',
})
client.connect((err) => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  })

  