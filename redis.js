const redis = require('redis');


const client = redis.createClient({
  username: 'default',
  password: 'Cbkb2NweMUe0TH6x6cRDanvM1oCx0wXg',
  socket: {
      host: 'redis-15921.c259.us-central1-2.gce.redns.redis-cloud.com',
      port: 15921
  }
});

client.on('error', err => console.log('Redis Client Error', err));

const connectRedis = () => {
  return client.connect();
}

module.exports = {client, connectRedis};