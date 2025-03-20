const redis = require('redis');


const client = redis.createClient({
  username: 'default',
  password: 'iv3v4ibXyjdPJOjWjrenbjwG1AdaIU0a',
  socket: {
      host: 'redis-15942.c15.us-east-1-2.ec2.redns.redis-cloud.com',
      port: 15942
  }
});

client.on('error', err => console.log('Redis Client Error', err));

const connectRedis = () => {
  return client.connect();
}

module.exports = {client, connectRedis};