# AWS ElastiCache Redis Cluster demo using Node.js
This is a demo application that shows how to use the AWS ElastiCache Redis Cluster with Node.js.

AWS ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory data store or cache in the cloud. The service improves the performance of web applications by allowing you to retrieve information from fast, managed, in-memory data stores, instead of relying entirely on slower disk-based databases.

The APP reads the value from the cache and if not found, it will read it from the database and store it in the cache for future use.

## Prerequisites
* Create a Redis Cluster in AWS ElastiCache 
* Create and attach a security group to the Redis Cluster that allows inbound traffic on port 6379 from anywhere 
* Copy the endpoint of the Redis Cluster and paste it in the `index.js` file, Example `my-demo-redis2.ukmr3w.ng.0001.use1.cache.amazonaws.com:6379`

## How to run the demo
* Copy the contents of index.js to a cloud9 environment
* Run `npm install redis` to install the Redis client
* Run `node index.js` to run the demo

## What does the demo do?
The demo will create a Redis client and will set a key/value pair in the Redis Cluster. Then it will get the value of the key and print it to the console.
