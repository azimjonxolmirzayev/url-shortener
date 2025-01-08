const redis = require("redis");
const { redisConfig } = require("./config");

const redisClient = redis.createClient(redisConfig);
redisClient.on("error", (err) => console.error("Redis connection error:", err));

redisClient
  .connect()
  .then(() => console.log("Redis client connected"))
  .catch((err) => console.error("Redis connection failed:", err));

module.exports = redisClient;
