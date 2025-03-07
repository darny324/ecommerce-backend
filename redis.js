const redis = require('redis');
const client = redis.createClient({
  username: 'default',
  password: 'iv3v4ibXyjdPJOjWjrenbjwG1AdaIU0a',
  socket: {
      host: 'redis-15942.c15.us-east-1-2.ec2.redns.redis-cloud.com',
      port: 15942
  }
});

client.on('error', (error) => {
  console.log('redis client error', error);
});

async function connectRedis(){
  await client.connect();
}

module.exports = {client, connectRedis};