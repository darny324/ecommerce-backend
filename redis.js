const redis = require('redis');
const client = redis.createClient();

client.on((error) => console.log("REDIS CLIENT ERROR", error));

const connectRedis = () => {
  return client.connect();
}

module.exports = {client, connectRedis};