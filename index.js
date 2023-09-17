//load the redis module
const redis = require('redis');

//self invoking function to await the connection
(async () => {

//crete the client 
const client = redis.createClient({
    url: 'redis://my-demo-redis2-001.ukmr3w.0001.use1.cache.amazonaws.com:6379'
  });

//handle the error
client.on('error', err => console.log('Redis Client Error', err));

//on connect, report the connection
client.on('connect', () => console.log('Redis Client Connected'));

//connect to the redis server
await client.connect();

//set the key value pair
await client.set('key', 'value123');

//get the value for the key
const value = await client.get('key');

//log the value
console.log('value', value);

//disconnect from the redis server
await client.disconnect();


})();